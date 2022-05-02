const router = require("express").Router();
const { addReaction } = require("../../controllers/thought-controller");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller"); // import the controller functions

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId/")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
