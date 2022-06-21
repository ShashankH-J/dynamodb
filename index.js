
console.log("in Dyn Constructor");
const awsConn = require("./helper/awsConnect");


class DynamoDB {
  // constructor() {
  //   console.log("in Dyn Constructor");
  //   super();
  //   this.PACKAGE_TYPE = 1;
  // }
  
  static getConnection() {
    awsConn.getConnection();
  }
}

// const DynamoDB = {
//   getConnection: function() {
//     awsConn.getConnection();
//   }
// }

module.exports =  DynamoDB;