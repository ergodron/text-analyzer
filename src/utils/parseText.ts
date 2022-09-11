import * as cheerio from "cheerio";

export function parseText(body: string): string {
  try {
    const tagsWithoutTrash: string = body
      .replaceAll(/<script(.*?)>.*?<\/script>/gs, "")
      .replaceAll(/<noscript(.*?)>.*?<\/noscript>/gs, "")
      .replaceAll(/<style(.*?)>.*?<\/style>/gs, "");
    const tree: cheerio.Root = cheerio.load(tagsWithoutTrash);
    return tree("body")?.text() ?? "";
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : (error as string));
  }
}
