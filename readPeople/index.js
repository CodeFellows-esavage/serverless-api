const dynamoose = require('dynomoose'); //3rd party

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

  //get person by query by id
  // let records = await People.query('id').eq(id).exec();

  //get all people
  let records = await People.scan().exec();

  const response = {
    statusCode: 200,
    body: JSON.stringify(records),
  };
  return response;
};
