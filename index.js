
console.log("in Dyn Constructor");
const awsConn = require("./helper/awsConnect");


class DynamoDB {
  
  static connect() {
    awsConn.connect();
  }
}


module.exports =  DynamoDB;