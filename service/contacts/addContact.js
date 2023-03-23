const { Contact } = require("../schemas/contact");

const addContact = (data) => {
  return Contact.create(data);
};

module.exports = addContact;
