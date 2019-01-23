#!/usr/bin/env node


const axios = require('axios');
const chalk = require('chalk');
const validator = require("email-validator");
const url = 'https://haveibeenpwned.com/api/v2/breachedaccount/';
const args = process.argv[2];
const ora = require('ora');
const figlet = require('figlet');
const chalkRainbow = require('chalk-rainbow');

// console.log (args);

console.log(chalkRainbow(figlet.textSync('Aloha', {
    font: 'banner',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})));

if (validator.validate(args) == true){

  const spinner = ora('Loading unicorns');

      spinner.color = 'yellow';
      spinner.text = 'Loading rainbows';

  console.log(" FIRE ! FIRE ! FIRE!");
  spinner.start();
   axios({
     method: 'get',
     url: url + args,
     headers: { 'User-Agent': 'node.js-cli' }, // this api needs this header set for the request
   }).then(res => {
     spinner.stop();
       res.data.forEach(function(element){
       console.log("Name: " + element["Name"] + "\nDate: " + element["BreachDate"]+ "\nDescription: " + element["Description"] + "\n_________")
     })
     // const log = chalk.green(breach); // we use chalk to set the color green on successful response

   }).catch(err => {

     if (err == "Error: Request failed with status code 404"){
       spinner.stop();

       const log = chalk.red("RAS, you're a free female"); // we set the color red here for errors.
       console.log(log);

     }

   })
}

      else {

       const log = chalk.yellow("This is not a f* email");
       console.log(log);
      }


// if (args.length > 3) {
//   errorLog(`only one argument can be accepted`)
//   usage()
// }
// };

 // if (validator.validate("test@email.com")) {
 //
 //  axios({
 //    method: 'get',
 //    url: url + args,
 //    headers: { 'User-Agent': 'node.js-cli' }, // this api needs this header set for the request
 //  }).then(res => {
 //    const breach = res.data
 //    const log = chalk.green(`${breach}`) // we use chalk to set the color green on successful response
 //    console.log(log)
 //  }).catch(err => {
 //    const log = chalk.red(err) // we set the color red here for errors.
 //    console.log(log)
 //  })
