import { ServerRoute } from "@hapi/hapi";
import Joi from "joi";
import AnalyzeText from "../controllers/analyzeText";

const analyzeText = new AnalyzeText();
export const analyzeTextRoute: ServerRoute[] = [
  {
    method: "POST",
    path: "/api/getwords",
    options: {
      handler: analyzeText.generatePDF,
      description:
        "Получение наиболее часто встречающихся слов по заданным url",
      notes:
        "Анализ текста по страницам и получение pdf-документа с рузультатом",
      tags: ["api"],
      validate: {
        payload: Joi.array()
          .items(Joi.string())
          .default([
            "https://habr.com/ru/",
            "https://coinmarketcap.com/",
            "https://yandex.ru",
          ]),
      },
    },
  },
];
