const dynamoose = require('dynamoose'); //3rd party

exports.handler = async (event) => {

  let peopleSchema = new dynamoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    age: Number,
  });

  //people needs to match the name of the table name on AWS
  let People = dynamoose.model('people', peopleSchema);

  let id = event.queryStringParameters && event.queryStringParameters.id ? event.queryStringParameters.id : null;

  await People.delete(id);

  const response = {
    statusCode: 201,
    body: JSON.stringify('Successfully Deleted Person'),
  };
  return response;
};
