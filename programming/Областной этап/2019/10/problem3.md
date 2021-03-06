### Задача C. Хан и массив

| Ограничение по времени | Ограничение по памяти |
| :--------------------- | :-------------------- |
| 2 секунды              | 512 мегабайт          |

Хан на день рождения получил массив из $n$ элементов. И начал с ним играться. Он взял каждый элемент и записал $m$ раз. Также у Хана есть любимое простое число $P$. Ему стало интересно, сколько существует подпоследовательностей, которые в сумме делятся на $P$. Помогите Хану узнать сколько таких подпоследовательностей.

#### Формат входного файла

В первой строке даны три целых числа $n$, $m$, $P$ через пробел — размер массива Хана; количество раз, которое он записывает каждое число в массиве; и простое число соответственно $(1 \le n \le 10^5, 1 \le m \le 10^9, 1 \le P \le 10^3)$.

Во второй строке даны $n$ целых чисел $a_1, a_2, ..., a_n$ — полученный Ханом массив на его день рождения $(1 \le a_i \le 10^9)$.

#### Формат выходного файла

Выведите одно число — количество подпоследовательностей, которые в сумме делятся на $P$. Так как это число может быть большим, выведите его остаток от деления на $1000000007$.

#### Примеры

Вход

```
3 2 5
3 7 4
```

Выход

```
11
```
