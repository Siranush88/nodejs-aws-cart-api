import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
//import { AuthMiddleware } from './authMiddleware';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host:
          process.env.DB_HOST ||
          'siranush88-database-2.cjei4qiuq3mr.eu-west-1.rds.amazonaws.com',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'SilvaArmen11',
        database: process.env.DB_NAME || 'siranush88_cloud_x_2',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      }),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host:
    //     process.env.DB_HOST ||
    //     'siranush88-database-2.cjei4qiuq3mr.eu-west-1.rds.amazonaws.com',
    //   port: parseInt(process.env.DB_PORT, 10) || 5432,
    //   username: process.env.DB_USERNAME || 'postgres',
    //   password: process.env.DB_PASSWORD || 'SilvaArmen11',
    //   database: process.env.DB_NAME || 'siranush88_cloud_x_2',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: process.env.NODE_ENV !== 'production',
    //   logging: true, // Add this line to enable logging
    // }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
