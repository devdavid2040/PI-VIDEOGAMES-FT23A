/* https://sequelize.org/master/

https://sequelize.org/master/manual/getting-started.html

https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database

https://sequelize.org/master/manual/getting-started.html#testing-the-connection

https://sequelize.org/master/manual/getting-started.html#closing-the-connection

https://sequelize.org/master/manual/getting-started.html#logging

https://sequelize.org/master/manual/getting-started.html#promises-and-async-await

---
https://sequelize.org/master/manual/model-basics.html#enforcing-the-table-name-to-be-equal-to-the-model-name

https://sequelize.org/master/manual/model-basics.html#timestamps
---

https://sequelize.org/master/manual/model-basics.html#synchronizing-all-models-at-once


https://sequelize.org/master/manual/model-basics.html#dates

https://sequelize.org/master/manual/model-basics.html#uuids

https://sequelize.org/master/manual/model-basics.html#default-values

https://sequelize.org/master/manual/model-basics.html#boolean

https://sequelize.org/master/manual/model-basics.html#strings

https://sequelize.org/master/manual/model-basics.html#numbers

*/


//---
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'postgres', 'test', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

//---
class User extends Model {}
User.init({
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
    primaryKey: true
  },
  username: DataTypes.STRING,
  birthday: DataTypes.DATEONLY,
  
}, { sequelize, timestamps: false, freezeTableName: true });

//---
(async () => {
  await sequelize.sync({force:true});
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  /* console.log(jane.toJSON()); */

const user=User.findAll();
console.log(user.toJSON());




  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  try {
    await sequelize.close()
    console.log('Connection has been closed successfully.');
  } catch (error) {
    console.error('Unable to close to the database:', error);
  }
  


})();