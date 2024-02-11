// import * as cdk from '@aws-cdk/core';
// import * as lambda from '@aws-cdk/aws-lambda';
// import * as rds from '@aws-cdk/aws-rds';
// import * as apigateway from '@aws-cdk/aws-apigateway';

// export class CartServiceStack extends cdk.Stack {
// constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
//   super(scope, id, props);

//     const cartApiLambda = new lambda.Function(this, 'CartApiLambda', {
//       runtime: lambda.Runtime.NODEJS_16_X,
//       handler: 'index.handler',
//       code: lambda.Code.fromAsset('src'),
//     });

//     const api = new apigateway.LambdaRestApi(this, 'CartApi', {
//       handler: cartApiLambda,
//       proxy: false, //
//       defaultCorsPreflightOptions: {
//         allowOrigins: ['*'],
//         allowMethods: ['*'],
//         allowHeaders: ['*'],
//         allowCredentials: true,
//       },
//     });

//     const proxyResource = api.root.addResource('{proxy+}');
//     proxyResource.addMethod('ANY');

//     new cdk.CfnOutput(this, 'CartApiEndpoint', {
//       value: api.url,
//       description: 'Endpoint for the Cart API',
//     });

// const database = rds.DatabaseInstance.fromDatabaseInstanceAttributes(
//   this,
//   'CartDatabase',
//   {
//     instanceIdentifier: 'siranush88-database-2',
//     instanceEndpointAddress:
//       'siranush88-database-2.cjei4qiuq3mr.eu-west-1.rds.amazonaws.com',
//     port: 5432,
//     securityGroups: [],
//   },
// );

//     const nestLambda = new lambda.Function(this, 'NestLambda', {
//       runtime: lambda.Runtime.NODEJS_16_X,
//       handler: 'index.handler',
//       code: lambda.Code.fromAsset('src'),
//       environment: {
//         DATABASE_HOST:
//           'siranush88-database-2.cjei4qiuq3mr.eu-west-1.rds.amazonaws.com',
//         DATABASE_PORT: '5432',
//         DATABASE_NAME: 'siranush88-database-2',
//         DATABASE_USERNAME: 'postgres',
//         DATABASE_PASSWORD: 'SilvaArmen11',
//       },
//     });

//     database.grantConnect(nestLambda);
//   }
// }

// const app = new cdk.App();
// new CartServiceStack(app, 'CartServiceStack');

import * as cdk from '@aws-cdk/core';
import * as rds from '@aws-cdk/aws-rds';

export class CartServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const database = rds.DatabaseInstance.fromDatabaseInstanceAttributes(
      this,
      'CartDatabase',
      {
        instanceIdentifier: 'siranush88-database-2',
        instanceEndpointAddress:
          'siranush88-database-2.cjei4qiuq3mr.eu-west-1.rds.amazonaws.com',
        port: 5432,
        securityGroups: [],
      },
    );
  }
}

const app = new cdk.App();
new CartServiceStack(app, 'CartServiceStack');
