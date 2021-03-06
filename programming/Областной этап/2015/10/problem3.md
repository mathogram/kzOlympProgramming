

### Задача C. Горы

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|2 секунды|64 мегабайта|

Даша записалась на кружок рисования и первым ее заданием стало нарисовать красивые горы Алматы. В Алматы имеется $N$ гор, и каждую можно представить в виде равнобедренного, прямоугольного треугольника с гипотенузой, расположенной на оси $x$ (смотрите рисунок). Даша ограничена в средствах, поэтому она хочет узнать точное количество краски, которое ей понадобится. Помогите Даше, найдите площадь гор, для того чтобы рассчитать количество необходимой краски.

#### Формат входного файла

Первая строка входных данных содержит единственное число $N$ $(1 \le N \le 10^4),$ количество гор в городе Алматы. Следующие $N$ строк содержат по два числа $0 \le x_i \le 10^6,$ $1 \le h_i \le 10^4,$ $X$ координата центра $i$-ой горы и ее высота соответственно.


#### Формат выходного файла

Выведите единственное число — площадь гор занимаемых на рисунке Даши, ответ следует выводить с 4 знаками после точки.

#### Примеры

Вход
```
2
0 1
1 1
```

Выход
```
1.7500
```
Вход
```
3
4 3
1 1
2 2
```

Выход
```
10.7500
```
Вход
```
1
0 1
```

Выход
```
1.0000
```
