const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

// app.engine('handlebars', exphbs());
app.engine('handlebars', hbs.engine);

app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/blog',(req, res)=>{
    
    const posts = [
        {
            title: "Aprendendo Node.js",
            category: "JavaScript",
            body:'Teste',
            comments: 4
        },
        {
            title: "Aprendendo PHP",
            category: "PHP",
            body:'Teste',
            comments: 3
        }
    ];
        
    res.render('blog',{posts});
});

app.get('/dashboard',(req, res)=>{
    
    const itens = ["Item A","Item B","Item C"];
    
    res.render('dashboard',{itens});
});


app.get('/post',(req, res)=>{
    
    const post = {
        title: "Aprender Node.js",
        category: "JavaScript",
        body:'Artigo para ajudar Node.js'
    };

    res.render('blogpost',{post});
});

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

