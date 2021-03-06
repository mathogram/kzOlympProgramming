



| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|2 секунды|64 мегабайта|

Для двух строк $S=s_1s_2s_3\ldots s_n$ и $T=t_1t_2t_3 \ldots t_m$ определим операцию сложения следующим образом: $R = S + T = s_1s_2s_3\ldots s_nt_1t_2t_3 \ldots t_m,$ операцию умножения следующим образом: $R = S \cdot T = s_1t_1s_1t_2s_1t_3 \ldots s_1t_ms_2t_1 \ldots s_2t_m \ldots s_nt_1 \ldots s_nt_m.$ Заметьте, что в общем случае $(S \cdot T) \cdot R \ne S \cdot (T \cdot R),$ поэтому операции умножения нужно выполнять последовательно слева направо. Как обычно, операция умножения имеет больший приоритет.

#### Формат входного файла

Единственная строка входного файла содержит арифметическое выражение, использующее операции сложения и умножения, а в качестве аргументов — строки, состоящие из строчных букв английского алфавита. Строка не содержит пробелов и ее длина не превышает 100 символов. В строке присутствуют только символы «+», «*» и строчные буквы английского алфавита.


#### Формат выходного файла

Выведите одно число без ведущих нулей — ответ к задаче.

#### Примеры

Вход
```
ab*cd*ef+g*h
```

Выход
```
34
```
