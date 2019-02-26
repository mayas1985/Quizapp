# Encuesta
## Serverless Architecture
 Encuesta truely rely on AWS Serverless architecture to store and retrieve data. 
 Angular app calls AWS API Gateway which in turn calls lambda which acts as a api host and is highly scalable. 
 Lambda authenticate user with JWT tokens and calls dynomo db to retrieve data for authenticated users.
### CloudFormation
  Cloudformation eases the work of deployment with standard aws template to create all required resources such as api gateway, lambda and even Dyanamo db tables.
  

### Api Gateway
  API Gateway acts as a entry point where angular app can communicate.

### Lambda
  Lambda acts as an api host and do all the serverless processing for the request being served with right authentication and authorization.

### dyanamo db
  holds no sql data for frontend angular app.


![diagram](https://github.com/mayas1985/Encuesta/blob/master/diagram.jpg?raw=true)
