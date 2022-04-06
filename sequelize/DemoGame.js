




 const sequelize = require("./util/database");

 const Customer = require("./models/customer");
 const Order = require("./models/order");
 
 Customer.belongsToMany(Order, { through: "OrderCustomer" });
 Order.belongsToMany(Customer, { through: "OrderCustomer" });
 