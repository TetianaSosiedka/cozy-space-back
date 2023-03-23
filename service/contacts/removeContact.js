const { Contact } = require("../schemas/contact");

const removeContact = (id) => {
  return Contact.findByIdAndDelete(id);
};

module.exports = removeContact;
