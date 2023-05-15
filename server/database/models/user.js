const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const {date} = require("joi");
mongoose.set("useUnifiedTopology", true);

const userSchema = schema({
    firstname: { type: String, required: true, unique: true },
    lastname: { type: String, required: true, unique: true },
    local: {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    avatar: { type: String, required: false },
    birthday: { type: Date, required: true },
});

userSchema.statics.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    } catch (e) {
        throw e;
    }
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.local.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;