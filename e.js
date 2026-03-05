import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });
import fs from "fs"
import qr from "qr-image"

const userInput = prompt("please do input a URL for my secreat plan TO TAKE OVER THE WORRRLLLD:  ");
if(
userInput.slice(0, 12) !== 'https://www.' ||
  userInput.slice(userInput.length - 4) !== '.com'){
  console.log("wYe");

}

else{
  var qr_svg = qr.image(userInput, { type: 'svg' });
  qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));
  var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
  fs.writeFile('text.txt',userInput, (err) => {
    if (err) throw err;
  })
  fs.writeFile('text.svg',svg_string, (err) => {
    if (err) throw err;
  })
}
