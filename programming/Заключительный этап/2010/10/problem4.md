

### Задача D. Сравнения

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|2 секунды|256 мегабайт|

$N$ различных целых чисел от $1$ до $N$ выписали на доске в ряд и расставили между ними знаки <, >, затем числа стерли, а знаки оставили. Восстановите стертые числа.

#### Формат входного файла

Первая строка входного файла содержит одно целое число $N$ ($1 \le N \le 10^5$). Вторая строка содержит строку длиной $N - 1$ символ. Каждый символ это один из знаков сравнения < или >.


#### Формат выходного файла

В выходной файл выведите $N$ чисел разделенных пробелами — исходную последовательность. Если существует несколько вариантов ответа, выведите любой.

#### Примеры

Вход
```
5
>><<
```

Выход
```
3 2 1 4 5
```
