PART 1 BASIC CONFIGURATION SEQUELIZE, IT CONECTION TO DATABASE POSTGRES
https://sequelize.org/master/manual/getting-started.html
Getting Started
In this tutorial you will learn to make a simple setup of Sequelize.

Installing
Sequelize is available via npm (or yarn).

# using npm
npm i sequelize # This will install v6, the latest stable release of Sequelize
---
You'll also have to manually install the driver for your database of choice:
# using npm
npm i pg pg-hstore #PostgreSQL
---
Connecting to a database
To connect to the database, you must create a Sequelize instance. 
This can be done by either passing a single connection URI to the Sequelize constructor:
EXAMPLE1 CONECTION SEQUELIZE TO DATABASE
const { Sequelize, IndexHints } = require('sequelize');
// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
---
EXTRA1:
Promises and async/await
Most of the methods provided by Sequelize are asynchronous and therefore return Promises. They are all Promises , so you can use the Promise API (for example, using then, catch, finally) out of the box.

Of course, using async and await works normally as well
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
---

PART2 MODELS CREATION 
https://sequelize.org/master/manual/model-basics.html
Model Basics
In this tutorial you will learn what models are in Sequelize and how to use them.

Concept
Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.


Model Definition
Models can be defined in ONE equivalent way in Sequelize:

Calling sequelize.define(modelName, attributes, options)

After a model is defined, it is available within sequelize.models by its model name.

To learn with an example, we will consider that we want to create a model to represent users, which have a firstName and a lastName. We want our model to be called User, and the table it represents is called Users in the database.

Both ways to define this model are shown below. After being defined, we can access our model with sequelize.models.User.


Using sequelize.define:
EXAMPLE2 MODEL DEFINITION
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
---
EXTRA2
I DO NOT UNDERSTAND
Caveat with Public Class Fields
Adding a Public Class Field with the same name as one of the model's attribute is going to cause issues. Sequelize adds a getter & a setter for each attribute defined through Model.init. Adding a Public Class Field will shadow those getter and setters, blocking access to the model's actual data.

// Invalid
class User extends Model {
  id; // this field will shadow sequelize's getter & setter. It should be removed.
  otherPublicField; // this field does not shadow anything. It is fine.
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

const user = new User({ id: 1 });
user.id; // undefined

// Valid
class User extends Model {
  otherPublicField;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

const user = new User({ id: 1 });
user.id; // 1
---

PART 3 SINGULAR NAME TO TABLE SEQUELIZE
Table name inference
Observe that, in both methods above, the table name (Users) was never explicitly defined. However, the model name was given (User).

By default, when the table name is not given, Sequelize automatically pluralizes the model name and uses that as the table name. This pluralization is done under the hood by a library called inflection, so that irregular plurals (such as person -> people) are computed correctly.

Of course, this behavior is easily configurable.

Enforcing the table name to be equal to the model name
You can stop the auto-pluralization performed by Sequelize using the freezeTableName: true option. This way, Sequelize will infer the table name to be equal to the model name, without any modifications:

sequelize.define('User', {
  // ... (attributes)
}, {
  freezeTableName: true
});
The example above will create a model named User pointing to a table also named User.

This behavior can also be defined globally for the sequelize instance, when it is created:

EXAMPLE3 SINGULAR NAME TO TABLE SEQUELIZE
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname', {
  define: {
    freezeTableName: true
  }
});

This way, all tables will use the same name as the model name.

Providing the table name directly
You can simply tell Sequelize the name of the table directly as well:

sequelize.define('User', {
  // ... (attributes)
}, {
  tableName: 'Employees'
});

---
PART4 SINCRONIZATION TO DATABASE ONLY
THIS PART4 EXPLAIN FILE Index.JS, ROOT PROYECT FOLDER API. 
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

Model synchronization
When you define a model, you're telling Sequelize a few things about its table in the database. However, what if the table actually doesn't even exist in the database? What if it exists, but it has different columns, less columns, or any other difference?

This is where model synchronization comes in. A model can be synchronized with the database by calling model.sync(options), an asynchronous function (that returns a Promise). With this call, Sequelize will automatically perform an SQL query to the database. Note that this changes only the table in the database, not the model in the JavaScript side.

User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
User.sync({ force: true }) - This creates the table, dropping it first if it already existed
User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
Example:

await User.sync({ force: true });
console.log("The table for the User model was just (re)created!");

Synchronizing all models at once
You can use sequelize.sync() to automatically synchronize all models. Example:
EXAMPLE4
await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");

Synchronization in production
As shown above, sync({ force: true }) and sync({ alter: true }) can be destructive operations. Therefore, they are not recommended for production-level software. Instead, synchronization should be done with the advanced concept of Migrations, with the help of the Sequelize CLI.
---
PART5 
Timestamps
By default, Sequelize automatically adds the fields createdAt and updatedAt to every model, using the data type DataTypes.DATE. Those fields are automatically managed as well - whenever you use Sequelize to create or update something, those fields will be set correctly. The createdAt field will contain the timestamp representing the moment of creation, and the updatedAt will contain the timestamp of the latest update.

Note: This is done in the Sequelize level (i.e. not done with SQL triggers). This means that direct SQL queries (for example queries performed without Sequelize by any other means) will not cause these fields to be updated automatically.

This behavior can be disabled for a model with the timestamps: false option:
EXAMPLE5
sequelize.define('User', {
  // ... (attributes)
}, {
  timestamps: false
});

It is also possible to enable only one of createdAt/updatedAt, and to provide a custom name for these columns:

class Foo extends Model {}
Foo.init({ /* attributes */ }, {
  sequelize,

  // don't forget to enable timestamps!
  timestamps: true,

  // I don't want createdAt
  createdAt: false,

  // I want updatedAt to actually be called updateTimestamp
  updatedAt: 'updateTimestamp'
});
---
EXRA3
Column declaration shorthand syntax
If the only thing being specified about a column is its data type, the syntax can be shortened:

// This:
sequelize.define('User', {
  name: {
    type: DataTypes.STRING
  }
});

// Can be simplified to:
sequelize.define('User', { name: DataTypes.STRING });
---
PART6 VALUES AND DATA TYPES

Default Values
By default, Sequelize assumes that the default value of a column is NULL. This behavior can be changed by passing a specific defaultValue to the column definition:
EXAMPLE6.1 DEFAULT VALUE
sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    defaultValue: "John Doe"
  }
});
Some special values, such as DataTypes.NOW, are also accepted:

sequelize.define('Foo', {
  bar: {
    type: DataTypes.DATETIME,
    defaultValue: DataTypes.NOW
    // This way, the current date/time will be used to populate this column (at the moment of insertion)
  }
});
--
Data Types
Every column you define in your model must have a data type. Sequelize provides a lot of built-in data types. To access a built-in data type, you must import DataTypes:

const { DataTypes } = require('sequelize'); // Import the built-in data types
Strings
DataTypes.STRING             // VARCHAR(255)
DataTypes.STRING(1234)       // VARCHAR(1234)
DataTypes.STRING.BINARY      // VARCHAR BINARY
EXAMPLE6.2
DataTypes.TEXT               // TEXT
DataTypes.TEXT('tiny')       // TINYTEXT
DataTypes.CITEXT             // CITEXT          PostgreSQL and SQLite only.
DataTypes.TSVECTOR           // TSVECTOR        PostgreSQL only.
Boolean
EXAMPLE6.3
DataTypes.BOOLEAN            // TINYINT(1)
Numbers
EXAMPLE6.4
DataTypes.INTEGER            // INTEGER
DataTypes.BIGINT             // BIGINT
DataTypes.BIGINT(11)         // BIGINT(11)

DataTypes.FLOAT              // FLOAT
DataTypes.FLOAT(11)          // FLOAT(11)
DataTypes.FLOAT(11, 10)      // FLOAT(11,10)

DataTypes.REAL               // REAL            PostgreSQL only.
DataTypes.REAL(11)           // REAL(11)        PostgreSQL only.
DataTypes.REAL(11, 12)       // REAL(11,12)     PostgreSQL only.

DataTypes.DOUBLE             // DOUBLE
DataTypes.DOUBLE(11)         // DOUBLE(11)
DataTypes.DOUBLE(11, 10)     // DOUBLE(11,10)

DataTypes.DECIMAL            // DECIMAL
DataTypes.DECIMAL(10, 2)     // DECIMAL(10,2)
Unsigned & Zerofill integers - MySQL/MariaDB only
In MySQL and MariaDB, the data types INTEGER, BIGINT, FLOAT and DOUBLE can be set as unsigned or zerofill (or both), as follows:

DataTypes.INTEGER.UNSIGNED
DataTypes.INTEGER.ZEROFILL
DataTypes.INTEGER.UNSIGNED.ZEROFILL
// You can also specify the size i.e. INTEGER(10) instead of simply INTEGER
// Same for BIGINT, FLOAT and DOUBLE
Dates
DataTypes.DATE       // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.DATE(6)    // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
DataTypes.DATEONLY   // DATE without time

UUIDs
For UUIDs, use DataTypes.UUID. It becomes the UUID data type for PostgreSQL and SQLite, and CHAR(36) for MySQL. Sequelize can generate UUIDs automatically for these fields, simply use DataTypes.UUIDV1 or DataTypes.UUIDV4 as the default value:
EXAMPLE6.5
{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
}

Others
There are other data types, covered in a separate guide.
--
https://sequelize.org/master/manual/other-data-types.html
Other Data Types
Apart from the most common data types mentioned in the Model Basics guide, Sequelize provides several other data types.


ENUMs
The ENUM is a data type that accepts only a few values, specified as a list.
EXAMPLE6.6
DataTypes.ENUM('foo', 'bar') // An ENUM with allowed values 'foo' and 'bar'
ENUMs can also be specified with the values field of the column definition, as follows:

sequelize.define('foo', {
  states: {
    type: DataTypes.ENUM,
    values: ['active', 'pending', 'deleted']
  }
});

JSON (SQLite, MySQL, MariaDB and PostgreSQL only)
The DataTypes.JSON data type is only supported for SQLite, MySQL, MariaDB and PostgreSQL. However, there is a minimum support for MSSQL (see below).

Note for PostgreSQL
The JSON data type in PostgreSQL stores the value as plain text, as opposed to binary representation. If you simply want to store and retrieve a JSON representation, using JSON will take less disk space and less time to build from its input representation. However, if you want to do any operations on the JSON value, you should prefer the JSONB data type described below.

Others
DataTypes.ARRAY(/* DataTypes.SOMETHING */)  // Defines an array of DataTypes.SOMETHING. PostgreSQL only.
---
EXTRA4 VALIDATIONS COLUMN NOT NULL, MORE INFORMATION AFTER
Column Options
When defining a column, apart from specifying the type of the column, and the allowNull and defaultValue options mentioned above, there are a lot more options that can be used. Some examples are below.

const { Model, DataTypes, Deferrable } = require('sequelize');

class Foo extends Model {}
Foo.init({
  // instantiating will automatically set the flag to true if not set
  flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

  // default values for dates => current time
  myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

EXAMPLE EXTRA4
  // setting allowNull to false will add NOT NULL to the column, which means an error will be
  // thrown from the DB when the query is executed if the column is null. If you want to check that a value
  // is not null before querying the DB, look at the validations section below.
  title: { type: DataTypes.STRING, allowNull: false },

  // Creating two objects with the same value will throw an error. The unique property can be either a
  // boolean, or a string. If you provide the same string for multiple columns, they will form a
  // composite unique key.
  uniqueOne: { type: DataTypes.STRING,  unique: 'compositeIndex' },
  uniqueTwo: { type: DataTypes.INTEGER, unique: 'compositeIndex' },

  // The unique property is simply a shorthand to create a unique constraint.
  someUnique: { type: DataTypes.STRING, unique: true },

  // Go on reading for further information about primary keys
  identifier: { type: DataTypes.STRING, primaryKey: true },

  // autoIncrement can be used to create auto_incrementing integer columns
  incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

  // You can specify a custom column name via the 'field' attribute:
  fieldWithUnderscores: { type: DataTypes.STRING, field: 'field_with_underscores' },

  // It is possible to create foreign keys:
  bar_id: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Bar,

      // This is the column name of the referenced model
      key: 'id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
    }
  },

  // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
  commentMe: {
    type: DataTypes.INTEGER,
    comment: 'This is a column name that has a comment'
  }
}, {
  sequelize,
  modelName: 'foo',

  // Using `unique: true` in an attribute above is exactly the same as creating the index in the model's options:
  indexes: [{ unique: true, fields: ['someUnique'] }]
});
---
PART7 Model Instances
https://sequelize.org/master/manual/model-instances.html

Model Instances
As you already know, a model is an ES6 class. An instance of the class represents one object from that model (which maps to one row of the table in the database). This way, model instances are DAOs.

For this guide, the following setup will be assumed:

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();


A very useful shortcut: the create method
Sequelize provides the create method, which combines the build and save methods shown above into a single method:
EXAMPLE 7.1
const jane = await User.create({ name: "Jane" });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"


Note: logging instances
Trying to log a model instance directly to console.log will produce a lot of clutter, since Sequelize instances have a lot of things attached to them. Instead, you can use the .toJSON() method (which, by the way, automatically guarantees the instances to be JSON.stringify-ed well).
EXAMPLE 7.2
const jane = await User.create({ name: "Jane" });
// console.log(jane); // Don't do this
console.log(jane.toJSON()); // This is good!
console.log(JSON.stringify(jane, null, 4)); // This is also good!

Default values
Built instances will automatically get default values:
EXAMPLE 7.2
const jane = User.build({ name: "Jane" });
console.log(jane.favoriteColor); // "green"
--
Updating an instance
If you change the value of some field of an instance, calling save again will update it accordingly:

const jane = await User.create({ name: "Jane" });
console.log(jane.name); // "Jane"
jane.name = "Ada";
// the name is still "Jane" in the database
await jane.save();
// Now the name was updated to "Ada" in the database!

EXAMPLE 7.3
You can update several fields at once with the set method:

const jane = await User.create({ name: "Jane" });

jane.set({
  name: "Ada",
  favoriteColor: "blue"
});
// As above, the database still has "Jane" and "green"
await jane.save();
// The database now has "Ada" and "blue" for name and favorite color
Note that the save() here will also persist any other changes that have been made on this instance, not just those in the previous set call. If you want to update a specific set of fields, you can use update:

const jane = await User.create({ name: "Jane" });
jane.favoriteColor = "blue"
await jane.update({ name: "Ada" })
// The database now has "Ada" for name, but still has the default "green" for favorite color
await jane.save()
// Now the database has "Ada" for name and "blue" for favorite color

---
PART8


/* //                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}); */
