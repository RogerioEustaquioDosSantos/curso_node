const express = require('express');
const exphbs = require('express-handlebars');


const app = express();

// app.engine('handlebars', exphbs());
app.engine('handlebars', exphbs.engine());

app.set('view engine','handlebars');

app.get('/dashboard',(req, res)=>{
    res.render('dashboard')
})

app.get('/',(req, res)=>{
    
    const user = {
        name: "Rogerio",
        surname: "Eustaquio"
    };

    const auth = true;
    const aprovado = false;

    res.render('home',{user:user,auth:auth,aprovado});
});

app.listen(3000,()=>{
    console.log(`App iniciado`);
})

