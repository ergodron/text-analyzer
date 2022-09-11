import * as pdf from "html-pdf";

export async function htmlToPDF(html: string): Promise<pdf.FileInfo> {
  return await new Promise((resolve, reject) => {
    pdf
      .create(html, { format: "Letter" })
      .toFile("./result.pdf", (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log(res);
        resolve(res);
      });
  });
}
