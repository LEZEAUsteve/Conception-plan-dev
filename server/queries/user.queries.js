const User = require("../database/models/user")




exports.findUserPerId = (id) => {
  return User.findById(id).exec();
};

exports.findUserPerEmail = (email) => {
    return User.findOne({ "local.email": email }).exec();
  };
  

  exports.createUser = async (user) => {
    try {
      const hashedPassword = await User.hashPassword(user.password);
      // to create number
      const newUser = new User({
        firstname: user.firstanme,
        lastname: user.lastname,
        local: {
          email: user.email,
          password: hashedPassword,
        },
        avatar: user.avatar,
        birthday: user.birthday
      });
      const toreturn = await newUser.save();
      let userObject = toreturn.toObject();
      delete userObject.local.password;
      return userObject;
    } catch (e) {
      throw e;
    }
  };