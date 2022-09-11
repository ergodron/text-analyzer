import { TAnalyzeResult } from "../../controllers/types";

export const body: string = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<style>
* {
  margin: 0;
}
</style>

<body>
  <p>король дикий лес вепрь картошка рыбка картошка</p>
  <h1>картошка окрошка свинья рыбка</h1>
  <div>балалайка окрошка картошка рыбка</div>

<script>
condole.log('окрошка');
</script>
</body>

</html>`.trim();
export const clearText: string = `король дикий лес вепрь картошка рыбка картошка
  картошка окрошка свинья рыбка
  балалайка окрошка картошка рыбка`.trim();
export const topWords: string[] = ["картошка", "рыбка", "окрошка"];
export const resultAnalyze: TAnalyzeResult[] = [
  { link: "https://loremipsum.com", data: topWords },
];
export const htmlForPdf: string = `<style>
  td, tr, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  td.error {
    background-color: #fa8072;
  }
  </style>
  <h3>Анализ текста на сайтах</h3>
  <table><tr><th colspan="3">https://loremipsum.com</th></tr><tr><td>картошка</td><td>рыбка</td><td>окрошка</td></tr></table>  
`.trim();
