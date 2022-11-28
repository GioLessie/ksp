const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "crud-employees";

exports.handler = async (event, context) => {

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true,
    };

    try {
        switch (event.httpMethod) {
            case 'GET':
                const userQuery = {
                       Key : {
                         "id" : event.pathParameters.id,
                       },
                       TableName: tableName
                      };
                  body = await dynamo.get(userQuery).promise();
                break;
            case 'PUT':
                body = await dynamo.put(
                  {
                    TableName: tableName,
                    Item: {
                      photo: JSON.parse(event.body).photo,
                      completeName: JSON.parse(event.body).completeName,
                      department: JSON.parse(event.body).department,
                      salary: JSON.parse(event.body).salary,
                      status: JSON.parse(event.body).status,
                      admission: JSON.parse(event.body).admission,
                      beneficiary: JSON.stringify(JSON.parse(event.body).beneficiary),
                      id: event.pathParameters.id
                    }
                  }  
                ).promise();
                break;
            case 'DELETE':
                body = await dynamo.delete(
                  {
                    TableName: tableName,
                    Key: {
                      id: event.pathParameters.id
                    }
                  }  
                ).promise();
                break;
                
            case 'POST':
                body = await dynamo.put(
                  {
                    TableName: 'crud-employees',
                    Item: {
                      photo: JSON.parse(event.body).photo,
                      completeName: JSON.parse(event.body).completeName,
                      department: JSON.parse(event.body).department,
                      salary: JSON.parse(event.body).salary,
                      status: JSON.parse(event.body).status,
                      admission: JSON.parse(event.body).admission,
                      beneficiary: JSON.stringify(JSON.parse(event.body).beneficiary),
                      id: context.awsRequestId
                    }
                  }
                  ).promise();
            break;
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