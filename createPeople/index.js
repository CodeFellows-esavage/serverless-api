const dynamoose = require('dynamoose'); //3rd party
const { nanoid } = require('nanoid');

exports.handler = async (event) => {
  console.log(event);

  let peopleSchema = new dynamoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    age: Number,
  });

  //people needs to match the name of the table name on AWS
  let People = dynamoose.model('people', peopleSchema);

  let personObj = JSON.parse(event.body);
  personObj.id = `${nanoid()}`;

  console.log("nanoid", nanoid());

  console.log(personObj.firstName);

  const newRecord = await People.create(personObj);

  const response = {
    statusCode: 201,
    body: JSON.stringify(newRecord),
  };
  return response;
};
