

### Задача H. Тима и сумма степеней

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|1 секунда|256 мегабайт|

У Тимы есть целое число $N$ и массив $A$ из $N$ целых чисел. Также у него есть два целых числа $M$ и $K$.  Для каждого $i$ от $1$ до $N$-$M$+$1$ Тима хочет посчитать значение выражения $1^K \cdot A_{i} + 2^K \cdot A_{i + 1} + \cdots + M^K \cdot A_{i + M - 1}$. Помогите ему решить эту задачу.

#### Формат входного файла

В первой строке находятся три целых числа $N$($1 \le N \le 10^5$),$M$($1 \le M \le N$) и  $K$($0 \le K \le 20$).

Во второй строке находятся $N$ целых числа $A_1,A_2, \cdots, A_N$ ($1 \le A_i \le 10^9$).


#### Формат выходного файла

Выведите $N$-$M$+$1$ строк, в $i$-ой строке выведите остаток $1^K \cdot A_{i} + 2^K \cdot A_{i + 1} + \cdots + M^K \cdot A_{i + M - 1}$. при делении на $10^9 + 7$.

#### Примеры

Вход
```
5 3 2
1 2 3 4 5
```

Выход
```
36
50
64
```
Вход
```
3 2 0
7 3 2
```

Выход
```
10
5
```
