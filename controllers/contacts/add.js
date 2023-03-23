const service = require("../../service/contacts");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await service.addContact({ ...req.body, owner });

  res.status(201).json(result);
};

module.exports = add;
