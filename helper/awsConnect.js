
// console.log("getConnection required.", conn);
const aws = require('aws-sdk');
// console.log("aws imported.", conn);

let conn = null;
console.log("conn init", conn);

function getConnection(){
  console.log("getConnection called.", conn);

  if(conn) return conn;

  console.log("connection is not available connecting..");

  const {
    AWS_REGION,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    ENDPOINT,
  } = JSON.parse(process.env.DYNAMODB);

  if(!AWS_REGION){
    new Error("AWS_REGION must be defined");
  }

  if(!AWS_ACCESS_KEY_ID){
    new Error("AWS_ACCESS_KEY_ID must be defined");
  }

  if(!AWS_SECRET_ACCESS_KEY){
    new Error("AWS_SECRET_ACCESS_KEY must be defined");
  }

  let extra = {};
  if(ENDPOINT) extra.endpoint = ENDPOINT;

  aws.config.updateConfig({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    ...extra,
  });

  conn = new aws.DynamoDB.DocumentClient();

  console.log("connected ", conn);

  return conn;  

}

module.exports = getConnection;