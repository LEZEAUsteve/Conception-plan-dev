const mongoose = require("mongoose");
const schema = mongoose.Schema;
const {date} = require("joi");
mongoose.set("useUnifiedTopology", true);

const roomSchema = schema({
    name: { type: String, required: true, unique: true },
    nbr_place: { type: Number, required: true },
    reserves : [{ type: schema.Types.ObjectId, ref: "reserve" }],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;