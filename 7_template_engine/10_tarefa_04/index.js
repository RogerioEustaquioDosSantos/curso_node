const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);

app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/',(req, res)=>{
    
    const skins = [
        {
            title: "Skin Maquina de Guerra",
            category: "Tanque",
            img: "/img/tanque.png"
        },
        {
            title: "Skin Alto Mar no Ar",
            category: "Jato",
            img: "/img/jato.png"
        },
        {
            title: "Skin Voo city",
            category: "Helicoptero",
            img: "/img/helicoptero.png"
        },
    ];
        
    res.render('home',{skins});
});


app.listen(3000,()=>{
    console.log(`App iniciado`);
})

