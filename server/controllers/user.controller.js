const UserModel = require("../models/user.model");
const { UserResponseSchemas } = require("../schemas/user.schemas");

const userController = {
  // add new user:
  async add(req, res) {
    try {
      const data = req.body;
      const resData = await UserModel.create(data);
      return res.status(201).json(resData);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Post unsuccessful!", error });
    }
  },
  // delete a user by uid:
  async deleteByUid(req, res) {
    try {
      const query = {
        uid: req.params.uid,
      };
      await UserModel.deleteOne(query);
      return res.status(204).json({
        message: `Successfully deleted uid=${req.params.uid}!`,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: `Delete uid=${req.params.uid} unsuccessful!`,
        error,
      });
    }
  },
  // update a user by uid:
  async updateByUid(req, res) {
    try {
      const query = {
        uid: req.params.uid,
      };
      const data = req.body;

      await UserModel.updateOne(query, data);
      return res
        .status(200)
        .json({ message: `Updated uid=${req.params.uid} successfully!` });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Not found!", error });
    }
  },
  // get one user by uid:
  async getByUid(req, res) {
    try {
      const query = {
        uid: req.params.uid,
      };
      const data = await UserModel.findOne(query);
      if (data === null)
        return res.status(404).json({ message: "Not found!", error });
      return res.status(200).json({ data: UserResponseSchemas.default(data) });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ message: "Not found!", error });
    }
  },
};

module.exports = userController;
