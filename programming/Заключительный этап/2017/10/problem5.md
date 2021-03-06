

### Задача E. Перевороты

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|1 секунда|64 мегабайта|

На столе подряд лежат $K$ листов бумаги. Дано число $N$. На каждом листе записаны все числа от 1 до $N$ ровно по одному разу, но некоторые из них записаны на видимой стороне, а остальные на обратной. Ваша задача - перевернуть некоторые листы так, чтобы максимизировать количество различных чисел на видимых сторонах.

#### Формат входного файла

На первой строке даны $N$ и $K$, так чтобы $N \times K\le 10^6$ при этом $ N \ge 1 $ и $K \ge 1$. 

На следующих $K$ строках идут описания листов. На $i+1$ строке, первое число это $m$ ($0 \le m \le N$) — количество чисел записанных на видимой стороне $i$-ого листа бумаги. Далее идут $m$ чисел которые написаны на видимой стороне $i$-го листа, каждый от $1$ до $N$.


#### Формат выходного файла

Выведите строку состоящий из $K$ символов. $i(1 \le i \le K)$ символ равняется 1 если надо перевернут, иначе 0. Если существует несколько ответов, вывести любой.

#### Примеры

Вход
```
5 4
2 1 3
2 3 4
2 2 4
3 1 2 3
```

Выход
```
1111
```
Вход
```
6 2
3 1 3 4
3 1 2 4
```

Выход
```
01
```
