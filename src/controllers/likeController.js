import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const dislikeOrLike = async (req, res) => {
  let { user_id, res_id } = req.body;
  let checkLike = await model.like_res.findOne({
    where: {
      user_id: user_id,
      res_id: res_id,
    },
  });
  if (checkLike) {
    await model.like_res.destroy({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });
    res.send("Bạn đã dislike");
  } else {
    let newData = {
      user_id,
      res_id,
      date_like: new Date(),
    };
    await model.like_res.create(newData);
    res.send("bạn đã like");
  }
};

const getListLikeByUserId = async (req, res) => {
  let { userId } = req.params;
  let data = await model.like_res.findAll({
    where: {
      user_id: userId,
    },
  });
  res.send(data);
};

const getListLikeByResId = async (req, res) => {
  let { resId } = req.params;
  let newResId = resId;
  let data = await model.like_res.findAll({
    where: {
      res_id: newResId,
    },
  });
  res.send(data);
};

export { getListLikeByUserId, getListLikeByResId, dislikeOrLike };
