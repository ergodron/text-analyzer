import * as Hapi from "@hapi/hapi";

export interface IAnalyzeText {
  generatePDF(
    request: Hapi.Request,
    h: Hapi.ResponseToolkit
  ): Promise<Hapi.ResponseObject>;
}

export type TAnalyzeResult = {
  link: string;
  data: string[];
  error?: string;
};

export type TCountWords = [string, number];
