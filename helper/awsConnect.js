const aws = require('aws-sdk');

function connect(){

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

  aws.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    ...extra,
  });

}

module.exports = {connect};