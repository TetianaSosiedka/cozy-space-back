const service = require("../../service/users");

const { RequestError } = require("../../helpers");

const verify = async (req, res) => {
  const { verificationToken } = req.params;

  const result = await service.findUserByVarifyToken(verificationToken);

  if (!result) {
    throw RequestError(404, "User not found");
  }

  await service.updateVarifyTokenUser(result._id);

  res.status(200).json({
    message: "Verification successful",
  });
};

module.exports = verify;
