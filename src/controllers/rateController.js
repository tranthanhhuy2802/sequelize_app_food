import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const addRate = async (req, res) => {
  let { user_id, res_id, amount } = req.body;
  let checkRate = await model.rate_res.findOne({
    where: {
      user_id: user_id,
      res_id: res_id,
    },
  });
  if (checkRate) {
    res.send("bạn đánh giá rồi");
  } else {
    let newData = {
      user_id,
      res_id,
      amount,
      date_rate: new Date(),
    };
    await model.rate_res.create(newData);
    res.send("đánh giá thành công");
  }
};
const getListRateByUserId = async (req, res) => {
  let { userId } = req.params;
  let data = await model.rate_res.findAll({
    where: {
      user_id: userId,
    },
  });
  res.send(data);
};
const getListRateByResId = async (req, res) => {
  let { resId } = req.params;
  let data = await model.rate_res.findAll({
    where: {
      res_id: resId,
    },
  });
  res.send(data);
};
export { addRate, getListRateByUserId, getListRateByResId };
