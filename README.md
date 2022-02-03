# serverless-api
Serverless API created using AWS API Gateway, lambda, and dynamoDB

- Developed By: Erik Savage

## Base URL:
https://6wrb21ri7l.execute-api.us-west-2.amazonaws.com/Production

## UML
![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/serverless-api.git`
- `cd` into api-server
- run `npm install`

## Usage
- access to the repo files above allows you to view the code being executed by each lambda function
- all functions are serverless

## Models

### People
```
'People', {
    id: String,
    firstName: String,
    lastName: String,
    age: Number,
  }
```

## Routes

### Recipe
-  POST `/people`, requires a people object: returns created people object from database
-  GET `/people`, returns an array of all people objects entered in the database
-  GET `/people/:id`, requires database id returns a specific people object entered in the database
-  PUT `/people/:id`, requires database id and a people object: updates a specific people object entered in the database
-  DELETE `/people/:id`, requires database id: deletes a specific food object from the database

## Resources
- [dynamoose docs](https://dynamoosejs.com/guide/Model)
- various AWS documentation
- Stackoverflow
- Kellen Linse