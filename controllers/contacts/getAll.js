const service = require("../../service/contacts");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  const query = req.query;

  const result = await service.listContacts({ owner, query });
  res.status(200).json(result);
};

module.exports = getAll;
