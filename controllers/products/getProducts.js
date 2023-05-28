const axios = require("axios");
const { KECRM_PATH, KECRM_API_KEY } = process.env;

const getProducts = async (req, res) => {
  const url = KECRM_PATH;
  const token = KECRM_API_KEY;
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getProducts;
