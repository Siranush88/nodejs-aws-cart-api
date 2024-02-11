import { HttpStatus } from '@nestjs/common';
import { OrderService } from '../order';
import { AppRequest } from '../shared';
import { CartService } from './services';
import { ICart } from './models';
export declare class CartController {
    private cartService;
    private orderService;
    constructor(cartService: CartService, orderService: OrderService);
    findUserCart(req: AppRequest): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            cart: Promise<ICart>;
            total: number;
        };
    }>;
    updateUserCart(req: AppRequest, body: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            cart: Promise<ICart>;
            total: number;
        };
    }>;
    clearUserCart(req: AppRequest): {
        statusCode: HttpStatus;
        message: string;
    };
    checkout(req: AppRequest, body: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        data: {
            order: any;
        };
    }>;
}
