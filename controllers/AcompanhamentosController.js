const express = require("express");
const router = express.Router();
const Acompanhamentos = require("../models/Acompanhamentos");

router.post("/editarNomeAcompanhamento", async (req, res) => {
    let editarNomeAcompanhamento = req.body.editarNomeAcompanhamento
    let editarAcompanhamentoId = req.body.editarAcompanhamentoId

    await Acompanhamentos.updateOne({
        _id: editarAcompanhamentoId
    },
    {$set: {nomeAcompanhamento: editarNomeAcompanhamento}}).then(() => {
        res.redirect("/admin")
    }).catch((error) => {
        console.log(error)
    })
});

router.post("/deletarAcompanhamento", async (req, res) => {
    let deletarAcompanhamento = req.body.deletarAcompanhamento

    await Acompanhamentos.deleteOne({nomeAcompanhamento: {$gte: deletarAcompanhamento}}).then(() => {
        console.log(`${deletarAcompanhamento} deletado!`);
        res.redirect("/admin");
    }).catch((error) => {
        console.log(error);
        res.redirect("/admin");
    })
})

router.post("/disponivelAcompanhamento", async (req, res) => {
    let disponivelAcompanhamento = req.body.disponivelAcompanhamento
    let disponivelAcompanhamentoId = req.body.disponivelAcompanhamentoId

    await Acompanhamentos.updateOne({
        _id: disponivelAcompanhamentoId
    },
    {$set: {disponivel: disponivelAcompanhamento}}).then(() => {
        res.redirect("/");
    }).catch((error) => {
        console.log(error);
        res.redirect("/");
    })
})

router.post("/cadastrarAcompanhamento", async (req, res) => {
    let cadastrarAcompanhamento = req.body.cadastrarAcompanhamento;

    await Acompanhamentos.insertMany({
        nomeAcompanhamento: cadastrarAcompanhamento,
        disponivel: "sim"
    })

    res.redirect("/");
})

module.exports = router;