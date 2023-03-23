const templateEmail = (verificationToken, email) => {
  const { BASE_URL } = process.env;

  return {
    to: email,
    subject: "Confirm singup",
    text: "For confirm your mail click on the button below",
    html: `<p>For confirm your mail click on the button below</p> 
    </br>
    <a style="border: solid 2px #000000;
    padding: 2px 5px;
    text-decoration: none;
    border-radius: 10px;
    color: #ffffff;
    background-color: #000000;
    " href="${BASE_URL}/api/users/verify/${verificationToken}">Click on</a>`,
  };
};

module.exports = templateEmail;
