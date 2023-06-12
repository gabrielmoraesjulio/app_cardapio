const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/app_cardapio");

const AcompanhamentosSchema = new mongoose.Schema({
    nomeAcompanhamento: {
        type: String,
        required: true
    },
    disponivel: {
        type: String,
        required: true
    }
});

const Acompanhamentos = mongoose.model("Acompanhamentos", AcompanhamentosSchema);

module.exports = Acompanhamentos;