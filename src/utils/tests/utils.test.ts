import { generateHTMLForPDF } from "../generateHTMLForPDF";
import { getTopWords } from "../getTopWords";
import { parseText } from "../parseText";
import { body, clearText, htmlForPdf, resultAnalyze, topWords } from "./helper";

describe("test utils", () => {
  it("Проверка функции parseText", () => {
    expect(parseText(body).trim()).toEqual(clearText);
  });

  it("Проверка функции generateHTMLForPDF", () => {
    expect(generateHTMLForPDF(resultAnalyze).trim()).toEqual(htmlForPdf);
  });

  it("Проверка функции getTopWords", () => {
    expect(getTopWords(clearText)).toEqual(topWords);
  });
});
