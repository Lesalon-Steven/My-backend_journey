// Import required packages
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
//const inquirer = require('inquirer');
//const qr = require('qr-image');
//const fs = require('fs');

// Function to generate QR code image
function generateQRCode(url) {
  const qr_png = qr.imageSync(url, { type: 'png' });
  fs.writeFileSync('qrcode.png', qr_png);
}

// Inquirer prompt to get user input
inquirer
  .prompt([
    {
      
      name: 'url',
      message: 'Enter the URL:',
    },
  ])
  .then((answers) => {
    // Save user input to a txt file
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFileSync("url.txt", url, (err) => {
        if(err) throw err;
        console.log("file saved successfully");
    });

    // Generate QR code image
   
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
