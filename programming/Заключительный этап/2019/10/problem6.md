### Задача F. Сделайте неотрицательным!

| Ограничение по времени | Ограничение по памяти |
| :--------------------- | :-------------------- |
| 1 секунда              | 256 мегабайт          |

Тима считает массив целых чисел

#### Формат входного файла

В первой строке находятся два целых числа $n, type (1 \le n \le 3 \cdot 10^5, 0 \le type \le 1)$.

Во второй строке находятся $n$ целых числа $a_1,a_2, ..., a_n(-10^8 \le a_i \le 10^8)$. Гарантируется, что можно сделать массив $a$

#### Формат выходного файла

В первой строке выведите минимальное количество тенге, которое необходимо чтобы сделать массив

#### Примеры

Вход

```
7 0
1 1 -1 0 -1 1 1
```

Выход

```
2
```

Вход

```
4 1
4 -2 -2 1
```

Выход

```
5
3
1 2 2
1 3 1
4 3 1
```
