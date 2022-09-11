import { TCountWords } from "../controllers/types";

export function getTopWords(text: string, len: number = 3): string[] {
  try {
    const foundWords: string[] | null = text.match(/([А-Яа-яA-Za-z]+){5,}/g);
    if (!foundWords) return [];
    const topWords = Object.entries(
      foundWords
        .map((el: string) => el.toLowerCase())
        .reduce((acc: { [k: string]: number }, el: string) => {
          acc[el] = (acc[el] || 0) + 1;
          return acc;
        }, {})
    )
      .sort((a: TCountWords, b: TCountWords) => b[1] - a[1])
      .map((el: TCountWords) => el[0]);

    topWords.length = topWords.length > len ? len : topWords.length;
    return topWords;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : (error as string));
  }
}
