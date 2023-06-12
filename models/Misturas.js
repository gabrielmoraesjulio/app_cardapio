const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/app_cardapio");

const MisturaSchema = new mongoose.Schema({
    nomeMistura: {
        type: String,
        required: true
    },
    disponivel: {
        type: String,
        required: true
    }
});

const Mistura = mongoose.model("Mistura", MisturaSchema);

module.exports = Mistura;