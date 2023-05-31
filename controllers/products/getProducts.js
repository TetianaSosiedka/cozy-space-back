const axios = require("axios");
const { KECRM_PATH, KECRM_API_KEY } = process.env;

const getProducts = async (req, res) => {
  const url = KECRM_PATH;
  const token = KECRM_API_KEY;
  const limit = 15;
  const { page = 1 } = req.query;

  await axios
    .get(`${url}?limit=${limit}&page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getProducts;
