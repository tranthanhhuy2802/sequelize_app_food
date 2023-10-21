import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const userOrder = async (req, res) => {
  const { user_id, food_id, amount, code, arr_sub_id } = req.body;

  const newData = {
    user_id,
    food_id,
    amount,
    code,
    arr_sub_id,
  };
  await model.orders.create(newData);
  res.send("Bạn đã đặt hàng thành công");
};

export { userOrder };
