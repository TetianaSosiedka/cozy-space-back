const { Contact } = require("../schemas/contact");

const updateStatusContact = (id, data) => {
  return Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
};

module.exports = updateStatusContact;
