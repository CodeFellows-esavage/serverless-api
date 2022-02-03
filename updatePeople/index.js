const dynamoose = require('dynamoose'); //3rd party

exports.handler = async (event) => {
  console.log(event.body);

  let peopleSchema = new dynamoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    age: Number,
  });

  //people needs to match the name of the table name on AWS
  let People = dynamoose.model('people', peopleSchema);

  let id = event.queryStringParameters && event.queryStringParameters.id ? event.queryStringParameters.id : null;

  let personObj = JSON.parse(event.body);

  const updatedRecord = await People.update({ id }, personObj);

  const response = {
    statusCode: 201,
    body: JSON.stringify(updatedRecord),
  };
  return response;
};
