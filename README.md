## Laravel CRUD

Пример создания CRUD приложения. Приложение использует только возможности Laravel.

js-фреймворки (jQuery, react, vue, и.т.д) отсутствуют.

В приложении присутствует web api для взаимодействия с базой данных, 
в которой хранятся данные о видеоиграх.

Версия Laravel - 9

Версия PHP - 8

Версия Bootstrap - 5


### Как запустить:

- Установить PHP 8+

- Установить MySql или Postgres

- Установить composer

- Клонировать проект git clone https://github.com/refus91/laravel_crud.git

- В файле .env установить ключ приложения (APP_KEY) и настройки подключения к БД (DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME,DB_PASSWORD)

- В терминале выполнить команду php artisan migrate

- В терминале выполнить команду php artisan db:seed

- В терминале выполнить команду php artisan serve

- Перейти по указаному адресу 


### API:

Авторизация выполнена с помощью пакета Sanctum. Используйте Postman для теста API

#### Регистрация и получение токена

- URL: http://127.0.0.1:8000/api/register

- Method: POST

- Перейдите на вкладку Headers и введите key => Accept, value => application/json

- Перейдите на вкладку Body и выберите form-data
    
    |                   |  **key**   |             **value**             |
    |-------------------|:----------:|:---------------------------------:|
    | Введите имя:      |    name    | текст, мин - 3 символа, макс - 50 |
    | Введите email:    |   email    |    произвольный почтовый адрес    |
    | Введите пароль:   |  password  |      текст, мин - 3 символа       |
    | Повторите пароль: | c_password |      текст, мин - 3 символа       |

- Вы получите токен, например, ``1|FLolPZ7eg1LGixtlRR1AE3TTAg2HU9DvDWP7maX3``
- Запомните имя и почтовый адрес, запишите токен - он понадобится для авторизации на других маршутах

#### Авторизация

- URL: http://127.0.0.1:8000/api/login

- Method: POST

- Перейдите на вкладку Body и выберите form-data

  |                 |  **key** |                       **value**                      |
  |-----------------|:--------:|:----------------------------------------------------:|
  | Введите email:  | email    | почтовый адрес, который использовали при регистрации |
  | Введите имя:    | name     | имя, которое использовали при регистрации            |
  | Введите пароль: | password | пароль, который использовали при регистрации         |
  | Введите токен:  | token    | токен который получили при регистрации               |

#### Получить список всех игр

- URL: http://127.0.0.1:8000/api/games

- Method: GET

- Перейдите на вкладку Headers

- Введите токен: key => Authorization, value => 'Bearer '.$accessToken
  должна получится строка вида - ``Bearer 1\|FLolPZ7eg1LGixtlRR1AE3TTAg2HU9DvDWP7maX3``

#### Добавить / создать игру (запись в БД)

- URL: http://127.0.0.1:8000/api/games

- Method: POST

- Перейдите на вкладку Headers

- Введите key => Accept, value => application/json

- Введите токен: key => Authorization, value => 'Bearer '.$accessToken
  должна получится строка вида - ``Bearer 1\|FLolPZ7eg1LGixtlRR1AE3TTAg2HU9DvDWP7maX3``

- Перейдите на вкладку Body и выберите form-data

  |                          | **key** |              **value**             |
  |--------------------------|:-------:|:----------------------------------:|
  | Введите название игры:   | name    | текст, мин - 3 символа, макс - 50  |
  | Введите название студии: | studio  | текст, мин - 3 символа, макс - 255 |
  | Введите жанр игры:       | type[0] | массив от 1-го до 11-ти.           |

#### Показать игру по id

- URL: http://127.0.0.1:8000/api/games/{$id}

- Method: GET

- Перейдите на вкладку Headers

- Введите токен: key => Authorization, value => 'Bearer '.$accessToken
  должна получится строка вида - ``Bearer 1\|FLolPZ7eg1LGixtlRR1AE3TTAg2HU9DvDWP7maX3``

#### Обновить / отредактировать игру (обновление записи в БД)

- URL: http://127.0.0.1:8000/api/games/{$id}

- Method: POST

- Перейдите на вкладку Headers

- Введите токен: key => Authorization, value => 'Bearer '.$accessToken
  должна получится строка вида - ``Bearer 1\|FLolPZ7eg1LGixtlRR1AE3TTAg2HU9DvDWP7maX3``

- Перейдите на вкладку Body и выберите form-data

  |                          | **key** |              **value**             |
  |--------------------------|:-------:|:----------------------------------:|
  | Введите название игры:   | name    | текст, мин - 3 символа, макс - 50  |
  | Введите название студии: | studio  | текст, мин - 3 символа, макс - 255 |
  | Введите жанр игры:       | type[0] | массив от 1-го до 11-ти.           |
  | Укажите метод:           | _method | PUT                                |

#### Удалить игру по id (удалить запись из БД)

- URL: http://127.0.0.1:8000/api/games/{$id}

- Method: DELETE

- Перейдите на вкладку Headers

- Введите токен: key => Authorization, value => 'Bearer '.$accessToken
  должна получится строка вида - ``Bearer 1\|FLolPZ7eg1LGixtlRR1AE3TTAg2HU9DvDWP7maX3``

#### Вывести список по жанру (регистр не учитывается)

- URL: http://127.0.0.1:8000/api/games/{$type}

- Method: GET

- Перейдите на вкладку Headers

- Введите токен: key => Authorization, value => 'Bearer '.$accessToken
  должна получится строка вида - ``Bearer 1\|FLolPZ7eg1LGixtlRR1AE3TTAg2HU9DvDWP7maX3``

###### *Список жанров

| **id** |    **type**   |
|:------:|:-------------:|
|    1   |     Action    |
|    2   |      RPG      |
|    3   |    Strategy   |
|    4   |   Simulator   |
|    5   |     Sport     |
|    6   |   Adventure   |
|    7   |    Shooter    |
|    8   |      MOBA     |
|    9   |     Quest     |
|   10   | Battle Royale |
|   11   |   Platformer  |
