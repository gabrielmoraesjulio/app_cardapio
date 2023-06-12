const express = require('express');
const app = express();
const PORT = 4040;
const bodyParser = require("body-parser");

//CONTROLLERS
const admin = require("./admin/admin")
const acompanhamentosController = require("./controllers/AcompanhamentosController");
const misturasController = require("./controllers/MisturasController");

//MODELS
const misturasModel = require("./models/Misturas");
const acompanhamentosModel = require("./models/Acompanhamentos");

//BODYPARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//VIEW
app.set('view engine', 'ejs');
app.use(express.static('public'))

//ROUTERS
app.post("/editarNomeAcompanhamento", acompanhamentosController);
app.post("/deletarAcompanhamento", acompanhamentosController);
app.post("/disponivelAcompanhamento", acompanhamentosController);
app.post("/cadastrarAcompanhamento", acompanhamentosController)

app.post("/editarNomeMistura", misturasController);
app.post("/deletarMistura", misturasController);
app.post("/disponivelMistura", misturasController);
app.post("/cadastrarMistura", misturasController);

app.get("/admin", admin);
app.get("/", async (req, res) => {
    
    const misturas = await misturasModel.find({disponivel: "sim"}).sort({_id: -1});
    const acompanhamentos = await acompanhamentosModel.find({disponivel: "sim"}).sort({_id: -1});

    res.render("index", {
        acharAcompanhamentos: acompanhamentos,
        acharMisturas: misturas
    })
});

app.listen(PORT, console.log(`Aplicativo rodando na porta http://localhost:${PORT}`));