const express = require("express");
const {
  getUserById,
  getAllUsers,
  createNewUser,
  updateUserById,
  deletUserById,
} = require("../controllers/userController");
const router = express.Router();

router.route("/users").get(getAllUsers).post(createNewUser);
router
  .route("/users/:userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deletUserById);

module.exports = router;
