import expressAsyncHandler from "express-async-handler";

const authUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

export { authUser };
