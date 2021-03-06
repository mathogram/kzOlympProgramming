

### Задача G. Секретные алгоритмы

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|2 секунды|256 мегабайт|

В стране Timart есть $N$ городов и $M$ двусторонних дорог. Города пронумерованы от $1$ до $N$. Известно, что с каждого города  можно добраться до любого другого по существующим дорогам. Андрей спрятал свитки с секретными алгоритмами в городах Timart. В $i$-ом городе хранится $A_i$ свитков. Рамазан хочет украсть эти свитки. Он может украсть все свитки из города, в котором он находится. Рамазан может начать воровать с любого города. Чтобы не быть пойманным, он не будет использовать одну дорогу два раза

#### Формат входного файла

В первой строке входных данных содержится два целых числа $N$, $M$ ($1 \le N \le 5 \cdot 10^5$, $0 \le M \le 5 \cdot 10^5$). Во второй строке находятся $N$ целых чисел $A_1, A_2, \ldots, A_N$, где $A_i$ — количество свитков в $i$-ом городе. В следующих $M$ строках содержится по $2$ целых положительных числа, разделенных пробелом, $u_i$, $v_i$ ($1 \le u_i, v_i \le N, u_i \neq v_i$)— дорога соединяющая города $u_i$ и $v_i$. Известно, что между двумя городами не может быть больше одной дороги, и что никакая дорога не соединяет город с самим собой. Гарантируется, что между любыми двумя городами существует путь состоящий из заданных дорог


#### Формат выходного файла

Выведите одно целое число — максимальное количество свитков, которое может украсть Рамазан.

#### Примеры

Вход
```
8 8
1 2 3 4 5 6 7 8
1 2
2 3
2 4
2 5
5 6
6 7
7 8
8 5
```

Выход
```
35
```
