const jwt = require("jsonwebtoken");

const { User } = require("../service/schemas/user");
const { RequestError } = require("../helpers");

const authenticate = async (req, res, next) => {
  const { SECRET_KEY } = process.env;
  try {
    const { authorization = "" } = req.headers;
    const [bearer = "", token = ""] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw new RequestError(401, "Not authorized");
    }
    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);
      if (!user || !user.token) {
        throw new Error();
      }

      req.user = user;
      next();
    } catch (error) {
      throw RequestError(401, "Not authorized");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
