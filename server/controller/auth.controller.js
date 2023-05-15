const {
    findUserPerEmail,
    createUser
  } = require("../queries/user.queries");
  
  exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      const user = await findUserPerEmail(email);
  
      if (user) {
        const match = await user.comparePassword(password);
        if (match) {
          req.login(user);
          res.send({ user: user });
        } else {
          res.status(404).send({ message: "Mauvais identifiants" });
        }
      } else {
        res.status(404).send({ message: "Mauvais identifiants" });
      }
    } catch (e) {
      res.status(404).send({ message: "error" });
    }
  };
  
  exports.me = async (req, res) => {
    try {
      if (req.user) {
        let user = { ...req.user._doc };
        delete user.local.password;
        res.send({ user: user });
      } else {
        res.send({ user: null });
      }
    } catch (error) {
      res.status(404).send({ message: "error" });
    }
  };
  
  exports.signout = async (req, res, next) => {
    try {
      req.logout();
      res.status(204).send();
    } catch (error) {
      res.status(404).send({ message: "error" });
    }
  };



  exports.signup = async (req, res, next) => {
    try {
   
      const body = req.body;
      const user = await createUser(body);
      res.send(user);
    } catch (e) {
     
      res.status(400).send("Error");
    }
  };