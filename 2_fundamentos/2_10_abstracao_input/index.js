const inquirer = require('inquirer');



inquirer.prompt([{name:'p1',message:'qual a primeira nota? '}
                ,{name:'p2',message:'qual a segunda nota? '}
               ]).then(
                (answers) => {
                    console.log(answers);
                    const media = answers.p1 + answers.p2 /2;

                    console.log(`Média: ${media}`)

                }
               ).catch(err => console.log(err));


// const prompt = inquirer.createPromptModule();
// prompt([{name:p1,message:'qual a primeira nota? '}]).then(/* ... */);