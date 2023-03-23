const service = require("../../service/contacts");
const { RequestError } = require("../../helpers");

const updateStatus = async (req, res) => {
  const { contactId } = req.params;
  const result = await service.updateStatusContact(contactId, req.body);
  if (!result) {
    throw RequestError("404", "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateStatus;
