/*  https://www.google.com  */
import promptSync from 'prompt-sync';//PROMPT TO GET URL
import fs from "fs";//CREATE FILE FOR IMAGE
import qr from "qr-image";//CREATE IMAGE
import express from "express";//PASTE ON HTML

const prompt = promptSync({ sigint: true });

const port = 5500;
const app = express();

let svg_string = "";   // make global

const userInput = prompt("please do input a URL for my secreat plan TO TAKE OVER THE WORRRLLLD: ");

if (
  userInput.slice(0, 12) !== 'https://www.' ||
  userInput.slice(-4) !== '.com'
) {
  console.log("wYE");
} 
else {

  const qr_svg = qr.image(userInput, { type: 'svg' });

  qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));

  svg_string = qr.imageSync(userInput, { type: 'svg' });

  fs.writeFileSync('text.txt', userInput);
  fs.writeFileSync('text.svg', svg_string);

  console.log("QR generated to TAKE OVER DA WORLLLD.");
}

app.get("/", (req, res) => {

  if (svg_string === "") {
    res.send("No QR generated.");
  } else {
    res.type("svg");
    res.send(svg_string);
  }

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});