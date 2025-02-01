/* This JavaScript code snippet is defining a function called `createUser` that is exported from a
module. The function takes an object as an argument with properties `firstname`, `lastname`,
`email`, and `password`. */
const User = require("../models/user.model");

module.exports.createUser = async = ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All field are required");
  }

  const user = User.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
