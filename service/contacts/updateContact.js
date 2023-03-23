const { Contact } = require("../schemas/contact");

const updateContact = (id, data) => {
  return Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
};

module.exports = updateContact;
