const service = require("../../service/users");

const logout = async (req, res) => {
  const { _id: id } = req.user;

  await service.logoutUser(id);

  res.status(204).json({
    message: "Logout success",
  });
};

module.exports = logout;
