const getUserById = (req, res) => {
  res.status(200).json({ message: `Get user from ${req.params.userId}` });
};

const getAllUsers = (req, res) => {
  res.status(200).json({ message: "Get all users" });
};

const createNewUser = (req, res) => {
  res.status(200).json({ message: `Create user` });
};

const updateUserById = (req, res) => {
  res.status(200).json({ message: `Get user from ${req.params.userId}` });
};

const deletUserById = (req, res) => {
  res.status(200).json({ message: `Get user from ${req.params.userId}` });
};

module.exports = {
  getUserById,
  getAllUsers,
  createNewUser,
  updateUserById,
  deletUserById,
};
