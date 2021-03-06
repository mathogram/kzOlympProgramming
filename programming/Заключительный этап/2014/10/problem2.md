

### Задача B. Мансур побеждает Александра

| Ограничение по времени      | Ограничение по памяти         |
|:----------------------------|:------------------------------|
|2 секунды|128 мегабайт|

Задана игра на кучках камней. Ход игрока заключается в том, что он может взять произвольное количество камней из одной кучки, либо поровну из всех. Игроки чередуют ходы. Проигрывает тот, кто не может сделать ход. 

Мансур играет в эту игру с Александром. На столе лежат две кучки камней, в первой $a$, во второй $b$ камней. Первым ходит Мансур. Мансур понял, что если он может проиграть в заданную игру, он может своим ходом добавить третью кучку камней так, чтобы гарантированно победить. Если Мансур добавляет третью кучку, то ход переходит к Александру и далее игра идет только на трех кучках. Теперь перед ним встала задача, может ли он выиграть в эту игру или ему нужно первым ходом добавить третью кучку, тогда какого она должна быть размера? Помогите Мансуру. Мансур и Александр опытные ACMщики, поэтому можете считать, что они всегда ходят оптимально.

#### Формат входного файла

В первой строке входных данных задано одно целое число $1 \le T \le 100000$ — количество тестов. В следующих $T$ строках заданы тесты: два целых числа $a$ и $b$, разделенных одним пробелом.


#### Формат выходного файла

Выведите $T$ строк, ``MANSUR''\ если Мансур побеждает в изначальной игре, либо число $x$, если Мансуру нужно добавить кучку из $x$ камней чтобы победить. Если существует несколько ответов выведите любой.

#### Примеры

Вход
```
5
1 1
1 2
3 3
3 5
9 24
```

Выход
```
MANSUR
3
MANSUR
6
MANSUR
```
