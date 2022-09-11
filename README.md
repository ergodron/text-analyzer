<br />
<div align="center">
  <img src="img/logo.png" alt="Logo" width="100" height="100">

  <h3 align="center">Text Analyzer</h3>

  <p align="center">
    	REST сервис для анализа текста на сайтах
    <br />
  </p>
</div>

## О проекте

![image](https://github.com/ergodron/text-analyzer/blob/main/img/process.gif)


Анализ текста на сайтах: сервис должен принимать на вход массив URL'ов, анализировать страницы по этим адресам, и возвращать PDF документ, в котором в таблице будут представлены три наиболее часто встречающихся слова длиннее 4 символов по каждому из URL'ов.

### Установка

Склонируйте репозиторий и перейдите в него

```
git clone https://github.com/ergodron/text-analyzer.git
cd text-analyzer
```

### Запуск и остановка контейнера

Для запуска выполните:

```
npm run up
```

Для остановки выполните:

```
npm run down
```

### Тесты

Запустить тесты можно при помощи команды:

```
npm run test
```

### Сваггер

Сваггер доступен по этому адресу:

```
http://localhost:3001/documentation
```

### Стек технологий

- [Node.js](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org)
- [Docker](https://www.docker.com)

### Выбор библиотек

Для парсинга сайтов выбрал библиотеку Puppeteer, т.к. она способна парсить SPA сайты.
