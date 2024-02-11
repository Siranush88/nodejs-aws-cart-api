// import { NestFactory } from '@nestjs/core';
// import { AppModule } from '../../src/app.module';

// declare const global: {
//   cachedNestApp?: any;
// };

// // async function bootstrap() {
// //   const app = await NestFactory.create(AppModule);
// //   await app.listen(3000);
// // }

// export const handler = async (event: any, context: any) => {
//   if (!global.cachedNestApp) {
//     global.cachedNestApp = await NestFactory.create(AppModule);
//     await global.cachedNestApp.init();
//   }

//   const result = await global.cachedNestApp
//     .getHttpAdapter()
//     .getInstance()
//     .handle(event, context);
//   return result;
// };
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';

declare const global: {
  cachedNestApp?: any;
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
