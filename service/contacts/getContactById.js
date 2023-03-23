const { Contact } = require("../schemas/contact");

const getContactById = (id) => {
  return Contact.findById(id).populate("owner", "email subscription");
};

module.exports = getContactById;
