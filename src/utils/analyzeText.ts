import * as puppeteer from "puppeteer";
import { TAnalyzeResult } from "../controllers/types";
import { getTopWords } from "./getTopWords";
import { parseText } from "./parseText";

export async function analyzeText(
  urls: string[]
): Promise<TAnalyzeResult[] | string> {
  let browser: puppeteer.Browser | undefined;
  const result: TAnalyzeResult[] = [];

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-sandbox",
      ],
    });
  } catch (error) {
    console.log("Puppeteer error:", error);
    return error instanceof Error ? error.message : (error as string);
  }

  for (const url of urls) {
    try {
      if (!browser) throw new Error("Browser not found");
      const page: puppeteer.Page = await browser.newPage();
      console.log("Creating a page: " + url);
      await page.goto(url);
      const body: string | undefined = await page.evaluate(() => {
        return document.querySelector("body")?.innerText;
      });
      if (!body) throw new Error("Page is empty");
      const clearText = parseText(body);
      result.push({
        link: url,
        data: getTopWords(clearText),
      });
    } catch (error) {
      console.error(error);
      result.push({
        link: url,
        data: [],
        error: error instanceof Error ? error.message : (error as string),
      });
    }
  }

  if (browser) await browser.close();
  return result;
}
