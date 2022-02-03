const dynamoose = require('dynamoose'); //3rd party

exports.handler = async (event) => {
  console.log(event);
  console.log(event.pathParameters);


  let peopleSchema = new dynamoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    age: Number,
  });

  //people needs to match the name of the table name on AWS
  let People = dynamoose.model('people', peopleSchema);
  let id = event.queryStringParameters && event.queryStringParameters.id ? event.queryStringParameters.id : null;

  console.log(id);

  let records;
  if (id) {
    //get person by query by id
    records = await People.query('id').eq(id).exec();
  } else {
    //get all people
    records = await People.scan().exec();
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(records),
  };
  return response;
};
