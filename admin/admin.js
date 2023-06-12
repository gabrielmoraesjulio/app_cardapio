const express = require("express");
const router = express.Router();

//MODELS
const misturasModel = require("../models/Misturas");
const acompanhamentosModel = require("../models/Acompanhamentos");

router.get("/admin", async (req, res) => {

    const misturas = await misturasModel.find({})
    const acompanhamentos = await acompanhamentosModel.find({})

    res.render("admin", {
        acharMisturas: misturas,
        acharAcompanhamentos: acompanhamentos
    })
});

module.exports = router;