

### Задача A. Магический квест

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|2 секунды|256 мегабайта|

Вы играете в компьютерную игру. У вас имеется $N$ магических предметов разного размера. В дорожную сумку могут поместиться только предметы суммарным размером $K$. Также вы знаете $M$ заклинаний, каждое из которых имеет определенную силу и использует определенный набор из имеющихся предметов. Отправляясь в поход, вы должны заполнить сумку предметами так, чтобы суммарная сила заклинаний, которыми вы сможете воспользоваться была максимально возможной.

#### Формат входного файла

Первая строка входного файла содержит три целых числа $N,$ $M,$ $K$ $(1 \le N,M \le 20,$ $1 \le K \le 10^9).$ Следующая строка содержит $N$ положительных целых чисел, не превышающих $10^9$ — размеры предметов. Следующая строка содержит $M$ положительных целых чисел, не превышающих $10^9$ — силы заклинаний. Следующие $M$ строк содержат описание заклинаний, по одному на строке. Описание заклинания — список номеров предметов, необходимых для того, чтобы воспользоваться им. Каждое заклинание требует хотя бы одного предмета.


#### Формат выходного файла

Выведите одну строку — список номеров предметов, которые вы возьмете
с собой.

#### Примеры

Вход
```
3 3 2
1 1 1
10 100 1000
1 2
1 2
3 2
```

Выход
```
2 3
```
