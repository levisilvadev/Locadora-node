const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota de boas vindas
app.get("/", function(req,res){
    res.send("<h1>Seja bem-vindo(a) ao site da locadora!</h1>");
})

//rota de lista de filmes disponíveis
app.get("/filmes", function(req,res){
    res.send(`
        <h1>Lista de Filmes!</h1>
        <ul>
            <li>O Poderoso Chefão</li>
            <li>Interestelar</li>
            <li>Matrix</li>
            <li>Her</li>
            <li>O Senhor dos Anéis: A Sociedade do Anel</li>
            <li>Vingadores: Ultimato</li>
        </ul>
    `);
})

//rota de lista de séries disponíveis
app.get("/series", function(req,res){
    res.send(`
        <h1>Lista de Séries!</h1>
        <ul>
            <li>Breaking Bad</li>
            <li>Game of Thrones</li>
            <li>The Walking Dead</li>
            <li>Stranger Things</li>
            <li>The Crown</li>
        </ul>
    `);
})

//rota do carrinho de compras
app.get("/carrinho", function(req,res){
    const filmes = [
        "O Poderoso Chefão",
        "Interestelar",
        "Matrix",
        "O Senhor dos Anéis: A Sociedade do Anel",
        "Vingadores: Ultimato"
    ];
    const series = [
        "Breaking Bad",
        "Game of Thrones",
        "The Walking Dead",
        "Stranger Things",
        "The Crown"
    ];
    const item = req.query.filme || req.query.serie;
    const itemValido = filmes.includes(item) || series.includes(item);

    if (!itemValido) {
        res.send("<h1>Seu carrinho está vazio!</h1>");
        return;
    }

    res.send(`
        <h1>Seu carrinho</h1>
        <ul>
            <li>${item}</li>
        </ul>
    `);
})

//rota de formas de pagamento aceitas
app.get("/pagamento", function(req,res){
    res.send(`
        <h1>Formas de pagamento aceitas</h1>
        <ul>
            <li>Pix</li>
            <li>Cartão de crédito</li>
            <li>Cartão de débito</li>
            <li>Boleto</li>
        </ul>
    `);
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})