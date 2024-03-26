import chalk from 'chalk';
import inquirer from 'inquirer' ;
import fs from 'fs';
import { Console } from 'console';

operation();

function operation(){

    inquirer.prompt([
        {
            type:'list',
            name: 'action',
            message:'O que deseja fazer?',
            choices:[
                'Criar conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ])
    .then((answer)=>{
        const action = answer['action'];

        console.log(action );

        switch (action) {
            case 'Criar conta':
                createAccount();
                break;
            case 'Depositar':
                deposit();
                break;
            case 'Consultar Saldo':
                getAccountBalance();
                break;
            case 'Sacar':
                withdraw();
                break;
            case 'Sair':
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'));
                process.exit();
                break;
            default:
                break;
        }

    })
    .catch((err)=>{
        console.log('Erro:',err)}
    );
}


function createAccount() {

    console.log(chalk.bgGreen.black("Obrigado por escolher nosso Banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));

    buildAccount();
    
}

function buildAccount() {

    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite o nome da conta:"
        }
    ])
    .then((answer)=>{
        const accountName = answer['accountName'];
        console.info(accountName);

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(
                chalk.bgRed.black('Esta conta já existe, escolha outro nome!!')
            );

            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`,'{"balance":0}',function (err){console.log(err)});

        console.log(chalk.green('Conta Criar com Sucesso'));

    })
    .catch((err)=>{
        console.log(err);
    });
    
}


function deposit() {

    inquirer.prompt(
        [
            {
                name: "accountName",
                message: "Qual o nome da sua conta?"
            }
        ]
    )
    .then((answer)=>{
        const accountName = answer['accountName'];

        if (!checkAccount(accountName)) {
            return deposit();
        }

        inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Digite o valor para deposito:"
                }
            ]
        )
        .then((answer)=>{
            const amount = answer['amount'];

            addAmount(accountName,amount);

            operation();
    
        })
        .catch((err)=>{
            console.log(err);
        });
    })
    .catch((err)=>{
        console.log(err);
    });
    
}

function checkAccount(accountName) {

    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta não existe'));
        return false;
    }

    return true;
    
}

function addAmount(accountName,amount){

    const accountData = getAccount(accountName);

    if(!amount){
        console.log(chalk.bgRed.black('Erro: Favor tentar novamente.'));
        return deposit();
    }

    accountData.balance = parseFloat(accountData.balance) + parseFloat(amount) ;

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData),(err)=>{console.log(err)});

    console.log(chalk.green(`Foi depositado o valor.`));
}

function getAccount(accountName){
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`,{ encoding:'utf-8', flag: 'r'});

    return JSON.parse(accountJson);
}

function getAccountBalance() {

    inquirer.prompt(
        [
            {
                name: "accountName",
                message: "Digite nome da conta:"
            }
        ]
    )
    .then((answer)=>{
        const accountName = answer['accountName'];

        if (!checkAccount(accountName)) {
            return getAccountBalance();
        }

        const accountData = getAccount(accountName);

        console.log(chalk.bgBlue.black(`O saldo da sua conta é R$ ${accountData.balance}`));

        operation();
    })
    .catch((err)=>{
        console.log(err);
    });
}

function withdraw() {

    inquirer.prompt(
        [
            {
                name: "accountName",
                message: "Digite nome da conta:"
            }
        ]
    )
    .then((answer)=>{
        const accountName = answer['accountName'];

        if (!checkAccount(accountName)) {
            return withdraw();
        }

        inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Digite valor a sacar:"
                }
            ]
        )
        .then((answer)=>{
            const amount = answer['amount'];

            removeAmount(accountName,amount);

        })
        .catch((err)=>{
            console.log(err);
        });

    })
    .catch((err)=>{
        console.log(err);
    });
    
}

function removeAmount(accountName,amount) {

    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.bgRed.black("Erro: tente novamente."));
        return operation();
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black("Saldo insuficiente!"));
        return operation();
        
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData),(err)=>{console.log(err)}); 

    console.log(chalk.green(`Foi realizado o saque no valor: R$ ${amount}`));

    operation();

    
}