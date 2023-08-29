const router = require("express").Router();
const { register, getuser, getAllUsers } = require("../Controllers/Users.js");

router.post("/register", register);
router.get("/getuser/:id", getuser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
