const { Contact } = require("../schemas/contact");

const listContacts = ({ owner, query }) => {
  const { page = 1, limit = 10 } = query;
  const skip = (page - 1) * limit;

  return Contact.find({ owner, ...query }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
};

module.exports = listContacts;
