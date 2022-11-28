const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "crud-employees";

exports.handler = async (event, context) => {
  
    //console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
      switch (event.httpMethod) {
        case 'GET':
          if(!event.queryStringParameters){
            body = await dynamo.scan({ TableName: tableName }).promise();
            break;
          }
          else{
            if(event.queryStringParameters.q){
              var params = {
                FilterExpression: 'contains(completeName, :n )',
                ExpressionAttributeValues: {
                  ':n' : event.queryStringParameters.q
                },
                Limit: event.queryStringParameters.limit,
                TableName: tableName
              };
              body = await dynamo.scan(params).promise()
              break;
            }
            var params = {
              IndexName: "department-index",
              KeyConditionExpression: 'department = :n',
              ExpressionAttributeValues: {
                ':n' : event.queryStringParameters.department
              },
              Limit: event.queryStringParameters.limit,
              TableName: tableName
            };
            body = await dynamo.query(params).promise()
            break;
          }
        default:
            throw new Error(`Unsupported method "${event.httpMethod}"`);
      }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};