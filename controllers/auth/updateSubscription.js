const service = require("../../service/users");

const { RequestError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id: id } = req.user;
  const body = req.body;

  const result = await service.updateSubscriptionUser(id, body);

  if (!result) {
    throw RequestError("404", "Not found");
  }

  res.status(200).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};
module.exports = updateSubscription;
