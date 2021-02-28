 const Poll =require("pg");

 const pool =new Poll.Pool({
     user: "postgres",
     password:'12345',
     host:"localhost",
     port: 5432,
     database:"perntodo"
 });
 module.exports =pool;