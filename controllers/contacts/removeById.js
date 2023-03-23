const service = require("../../service/contacts");
const { RequestError } = require("../../helpers/");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await service.removeContact(contactId);
  if (!result) {
    throw RequestError("404", "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = removeById;
