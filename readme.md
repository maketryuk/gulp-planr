# langston-gulp-starter

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/) ***12-ой версии*** (на новых версиях NodeJS имеются проблемы с установкой некоторых пакетов)
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/langstons/langstons-gulp-starter.git```
* установите ```gulp``` глобально: ```npm i --global gulp-cli```
* перейдите в скачанную папку со сборкой: ```cd gulp-scss-starter```
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу, введите команду: ```npm run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```npm run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта для загрузки на сервер.

## :open_file_folder: Файловая структура

```
langstons-gulp-starter
├── app
├── gulpfile.babel.js
│   ├── config
│   ├── tasks
│   └── index.js
├── src
│   ├── components
│   │   └── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   └── views
├── .gitignore
└── package.json
```

* Корень папки:
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * БЭМ-блоки: ```src/components/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * страницы сайта: ```src/views```
    * SCSS-файлы: ```src/styles```
* Папка ```app``` - папка, из которой запускается локальный сервер для разработки (при запуске ```yarn run dev```)
* Папка ```gulpfile.babel.js/tasks``` - папка с Gulp-тасками

## :keyboard: Команды
* ```npm run dev``` - запуск сервера для разработки проекта
* ```npm run build``` - собрать проект с оптимизацией без запуска сервера

## :bulb: Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/components/blocks```
* папка одного БЭМ-блока содержит в себе один HTML-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * HTML-файл блока импортируется в файл ```src/views/index.html``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/styles/main.scss``` (импортируется автоматически)
    * JS-файл блока импортируется в ```src/js/main.js``` (импортируется автоматически)

Пример структуры папки с БЭМ-блоком:
```
components
├── blocks
│   ├──header
│   │   ├── header.html
│   │   ├── header.js
│   │   └── header.scss
```

### Страницы проекта
* страницы проекта находятся в папке ```src/views/```
    * главная страница: ```src/views/index.html```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```

### Изображения
* изображения находятся в папке ```src/img```
    * изображения автоматически конвертируются в формат ```.webp``` и HTML файл автоматически генерирует структуру их использования.
```html
    <img src="img/logo.svg" alt="Logo Of Langston">
```
```html
    <picture>
      <source srcset="img/logo.svg" type="image/webp">
      <img src="img/logo.svg" alt="Logo Of Langston">
    </picture>
```

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```npm i package_name```
    * для подключения JS-файлов библиотек импортируйте их в файл ```src/js/libs/vendor.js```, например:
    ```javascript
    import $ from "jquery";
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/libs/vendor.scss```
    * либо же, вы можете в директориях ```src/js/libs/``` ```src/styles/libs/``` создать свои файлы и на выходе получить ``` vendor.min.js ``` и ``` vendor.min.css ```

## :envelope: Контакты
* Instagram: [@bycoulot](https://www.instagram.com/bycoulot/)
* Telegram: [@maketryuk](https://t.me/maketryuk)
