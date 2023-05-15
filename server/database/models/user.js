const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");
mongoose.set("useUnifiedTopology", true);

const userSchema = schema({
    username: { type: String, required: true, unique: true },
    local: {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
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