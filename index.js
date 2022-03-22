import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
import TurndownService from 'turndown';
import * as fs from 'fs';

function splitMulti(str, tokens) {
    var tempChar = tokens[0]; // We can use the first token as a temporary join character
    for (var i = 1; i < tokens.length; i++) {
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}

var splitOrig = String.prototype.split; // Maintain a reference to inbuilt fn
String.prototype.split = function () {
    if (arguments[0].length > 0) {
        if (Object.prototype.toString.call(arguments[0]) == "[object Array]") { // Check if our separator is an array
            return splitMulti(this, arguments[0]);  // Call splitMulti
        }
    }
    return splitOrig.apply(this, arguments); // Call original split maintaining context
};

async function getOlympiadPage(n) {
    console.log(`doing ${n}`);
    return await fetch(`http://matol.kz/olympiads/${n}`).then(
        async (res) => {
            if (res.ok) {
                return await res.text();
            } else {
                return false;
            }
        },
        (err) => {
            console.error(`FAILED LOADING PAGE http://matol.kz/olympiads/${n}\n`, err);
            return false;
        }
    )
}

function isProgramming(text) {
    return !!(text.search("Информатика") + 1);
}


function getAllProblems(pageRoot) {
    // return [...pageRoot.querySelectorAll("#accordion > div.panel > div.panel-collapse > div.panel-body")]
    return [...pageRoot.querySelectorAll(".panel-body")]
}

function getInfo(pageRoot) {
    let title = pageRoot.querySelector("ol.breadcrumb > li:nth-child(4)").innerText,
        year = pageRoot.querySelector("ol.breadcrumb > li:nth-child(5)").innerText.slice(5, 9),
        gradesText = pageRoot.querySelector("ol.breadcrumb > li:nth-child(6)").innerText,
        grades,
        tour;
    if (pageRoot.querySelector("ol.breadcrumb > li:nth-child(7)")) {
        tour = pageRoot.querySelector("ol.breadcrumb > li:nth-child(7)").innerText[0] - 1;
    }
    else {
        tour = 0;
    }

    if (gradesText.search('-') == -1 && gradesText.search('/') == -1 && gradesText.search(',') == -1) {
        grades = [gradesText.split(' ')[0]];
    }
    else if (gradesText.search('-') != -1) {
        let keys = gradesText.split(' к')[0].split(['-']);
        grades = []
        for (let i = new Number(keys[0]); i <= new Number(keys[1]); i++) {
            grades.push(i);
        }
    }
    else {
        grades = gradesText.split(' к')[0].split(['/', ',']);
        grades = grades.map(t => t.trim())
    }

    return [title, year, grades, tour]
}

function element2object(problemEl) {
    const problemObj = {}

    try {
        problemObj.title = problemEl.querySelector("h4").innerText
    } catch (e) {
        problemObj.title = '';
    }
    try {
        problemObj.timeRestriction = problemEl.querySelectorAll(".row > .col-xs-6.col-md-9")[0].innerText
    }
    catch (e) {
        problemObj.timeRestriction = "-"
    }
    try {
        problemObj.memoryRestriction = problemEl.querySelectorAll(".row > .col-xs-6.col-md-9")[1].innerText
    }
    catch (e) {
        problemObj.memoryRestriction = "-"
    }
    try {
        problemObj.task = problemEl.querySelector("br").nextSibling.textContent.trim()
    }
    catch (e) {
        problemObj.task = problemEl.querySelectorAll(".inf-header")[0].previousSibling.textContent.trim()
    }

    try {
        problemObj.input = problemEl.querySelectorAll(".inf-header")[0].nextSibling.textContent.trim()
        problemObj.output = problemEl.querySelectorAll(".inf-header")[1].nextSibling.textContent.trim()
    }
    catch {
        problemObj.input = "";
        problemObj.output = "";
    }

    problemObj.examples = []

    let examples = [...problemEl.querySelectorAll("pre")]
    for (let i = 0; i < examples.length / 2; i++) {
        problemObj.examples.push({
            "input": examples[2 * i].innerText.trim(),
            "output": examples[2 * i + 1].innerText.trim(),
        })
    }

    return problemObj;
}

function template(problemObj) {
    return `

${(problemObj.title != "") ? `### ${problemObj.title}` : ""}

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|${problemObj.timeRestriction}|${problemObj.memoryRestriction}|

${problemObj.task}

${(problemObj.input != "") ? "#### Формат входного файла" : ""}

${problemObj.input}


${(problemObj.output != "") ? "#### Формат выходного файла" : ""}

${problemObj.output}

${(problemObj.examples.length > 0) ? "#### Примеры" : ""}

${problemObj.examples.map(
        e => "Вход\n```\n" + e.input + "\n```\n\nВыход\n```\n" + e.output + "\n```"
    ).join("\n")}
`
};

const turndownService = new TurndownService()
function toMd(el) {
    return turndownService.turndown(el.innerHTML);
}

function createMd(olympName, year, grades, tour, problemTexts) {
    for (let i in grades) {
        const dir = `programming/${olympName}/${year}/${grades[i]}/`
        createDir(dir);

        for (let i = 0; i < problemTexts.length; i++) {
            fs.writeFileSync(
                `${dir}/problem${i + 1 + tour * 3}.md`,
                problemTexts[i],
                { flag: 'w' }
            );
        }
    }
}

function createDir(dir) {
    let dirCreated = '', dirs = dir.split('/');
    for (let i = 0; i < dirs.length; i++) {
        dirCreated += `${dirs[i]}/`;
        if (!fs.existsSync(dirCreated)) {
            fs.mkdirSync(dirCreated);
        }
    }
}

async function init() {
    for (let i = 1000; i > 0; i--) {
        const pageText = await getOlympiadPage(i);
        if (!pageText) continue;
        if (!isProgramming(pageText)) continue;
        try {
            const root = parse(pageText);
            if (root.querySelector("ol > li:nth-child(3)").innerText != 'Республиканская олимпиада') continue;

            const problemElements = getAllProblems(root);
            const problemObjects = problemElements.map(pEl => element2object(pEl));
            const problemTemplates = problemObjects.map(pObj => template(pObj));
            // const problemTemplates = problemElements.map(el => toMd(el));

            const [olympiadName, olympiadYear, olympiadGrades, olympiadTour] = getInfo(root);

            createMd(
                olympiadName,
                olympiadYear,
                olympiadGrades,
                olympiadTour,
                problemTemplates
            )
            console.log(`${olympiadName.slice(0, 5)} ${olympiadYear} ${olympiadGrades.join("/")}`)
        } catch (error) {
            console.log(error)
        }
    }
}

init()