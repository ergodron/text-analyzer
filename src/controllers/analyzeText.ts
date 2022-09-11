import * as Hapi from "@hapi/hapi";
import { analyzeText } from "../utils/analyzeText";
import { generateHTMLForPDF } from "../utils/generateHTMLForPDF";
import { htmlToPDF } from "../utils/htmlToPDF";
import { IAnalyzeText } from "./types";

export default class AnalyzeText implements IAnalyzeText {
  async generatePDF(
    request: Hapi.Request,
    h: Hapi.ResponseToolkit
  ): Promise<Hapi.ResponseObject> {
    try {
      const urls = request.payload as string[];
      const resultAnalyze = await analyzeText(urls);
      if (Array.isArray(resultAnalyze)) {
        if (!resultAnalyze.length)
          return h.response("Result not found").code(404);
        const html: string = generateHTMLForPDF(resultAnalyze);
        const pdf = await htmlToPDF(html);
        return h
          .file(pdf.filename)
          .header(
            "Content-disposition",
            "attachment; filename=" + "result.pdf"
          );
      } else {
        return h.response(resultAnalyze).code(400);
      }
    } catch (error) {
      return h
        .response(error instanceof Error ? error.message : (error as string))
        .code(400);
    }
  }
}
