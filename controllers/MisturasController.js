const express = require("express");
const router = express.Router();
const Misturas = require("../models/Misturas")

router.post("/editarNomeMistura", async (req, res) => {
    let editarNomeMistura = req.body.editarNomeMistura;
    let editarNomeId = req.body.editarNomeId;

    await Misturas.updateOne({
        _id: editarNomeId
    },
    {$set: {nomeMistura: editarNomeMistura}});

    res.redirect("/admin");
});

router.post("/deletarMistura", async (req, res) => {
    let deletarMistura = req.body.deletarMistura

    await Misturas.deleteOne({nomeMistura:{$gte: deletarMistura}}).then(() => {
        console.log(`${deletarMistura} deletado!`);
        res.redirect("/admin");
    }).catch((error) => {
        console.log(error)
        res.redirect("/admin");
    });
})

router.post("/disponivelMistura", async (req, res) => {
    let disponivelMistura = req.body.disponivelMistura
    let disponivelMisturaId = req.body.disponivelMisturaId

    await Misturas.updateOne({
        _id: disponivelMisturaId
    },
    {$set: {disponivel: disponivelMistura}}).then(() => {
        console.log("Disponibilidade alterada!");
        res.redirect("/");
    }).catch((error) => {
        console.log(error);
        res.redirect("/");
    })
})

router.post("/cadastrarMistura", async (req, res) => {
    let cadastrarMistura = req.body.cadastrarMistura;

    await Misturas.insertMany({
        nomeMistura: cadastrarMistura,
        disponivel: "sim"
    })

    res.redirect("/");
})
module.exports = router;