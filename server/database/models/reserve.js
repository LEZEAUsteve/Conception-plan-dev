const mongoose = require("mongoose");
const schema = mongoose.Schema;
const {date} = require("joi");
mongoose.set("useUnifiedTopology", true);

const reserveSchema = schema({
    start: { type: Date, required: true, unique: true },
    end: { type: Date, required: true },
    roomId: { type: schema.Types.ObjectId, ref: "room", required: true },
    userId: { type: schema.Types.ObjectId, ref: "user", required: true },
});

const Reserve = mongoose.model("Reserve", reserveSchema);

module.exports = Reserve;