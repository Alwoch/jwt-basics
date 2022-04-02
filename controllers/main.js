const customAPIError = require("../errors/custom-error");

// console.log(customAPIError);
// const login = async (req, res) => {
//   // const { username, password } = req.body;
//   const { username, password } = req.body || {};
//   if (!username || !password) {
//     return new customAPIError("Please provide email and password", 400);
//   }
//   res.send("fake Login/Register/Signup");
// };
const login = async (req, res, next) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return new customAPIError("Please provide email and password", 400);
    }
    res.send("fake Login/Register/Signup");
    next();
  } catch (error) {
    console.log(error);
    next(error);
    return res.status(500).json({ msg: "Something went wrong..." });
  }
};
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
