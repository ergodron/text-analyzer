import { TAnalyzeResult } from "../controllers/types";

export function generateHTMLForPDF(data: TAnalyzeResult[]): string {
  let html: string = `<style>
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
  <table>`;
  for (let rec of data) {
    html += `<tr><th colspan="3">${rec.link}</th></tr><tr>`;
    for (let word of rec.data) {
      html += `<td>${word}</td>`;
    }
    if (rec.error) {
      html += `<td class="error" colspan="3">${rec.error}</td>`;
    }
  }
  html += `</tr></table>`;

  return html;
}
