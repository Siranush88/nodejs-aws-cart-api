import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { ICart } from '../models';

@Injectable()
export class CartService {
  private userCarts: Record<string, ICart> = {};

  findByUserId(userId: string): ICart {
    return this.userCarts[userId];
  }

  createByUserId(userId: string) {
    const id = v4();
    const userCart = {
      id,
      items: [],
    };

    this.userCarts[userId] = userCart;

    return userCart;
  }

  findOrCreateByUserId(userId: string): ICart {
    const userCart = this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  updateByUserId(userId: string, { items }: ICart): ICart {
    console.log('items >>>>>>>>>', items);
    console.log('userId >>>>>>>>>', userId);

    const { id, ...rest } = this.findOrCreateByUserId(userId);

    const updatedCart = {
      id,
      ...rest,
      items: [...items],
      //items: items ? [...items] : [],
    };

    this.userCarts[userId] = { ...updatedCart };

    return { ...updatedCart };
  }

  removeByUserId(userId): void {
    this.userCarts[userId] = null;
  }
}

//============================================================

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { v4 } from 'uuid';
// import { ICart } from '../models';
// import { InjectRepository } from '@nestjs/typeorm';
// import { FindOneOptions, Repository } from 'typeorm';
// import { Cart } from '../entities/cart.entity';

// @Injectable()
// export class CartService {
//   constructor(
//     @InjectRepository(Cart)
//     private readonly cartRepository: Repository<ICart>,
//   ) {}

//   async findByUserId(userId: string): Promise<ICart | undefined> {
//     return this.cartRepository.findOne({
//       where: { userId },
//     } as FindOneOptions<ICart>);
//   }

//   async createByUserId(userId: string): Promise<ICart> {
//     const id = v4();
//     const userCart = this.cartRepository.create({
//       id,
//       user_id: userId,
//       items: [],
//     });

//     return this.cartRepository.save(userCart);
//   }

//   async findOrCreateByUserId(userId: string): Promise<ICart> {
//     const userCart = await this.findByUserId(userId);

//     if (userCart) {
//       return userCart;
//     }

//     return this.createByUserId(userId);
//   }

//   async updateByUserId(userId: string, { items }: ICart): Promise<ICart> {
//     const userCart = await this.findOrCreateByUserId(userId);
//     userCart.items = items;
//     return this.cartRepository.save(userCart);
//   }

//   async removeByUserId(userId): Promise<void> {
//     const userCart = await this.findByUserId(userId);

//     if (!userCart) {
//       throw new NotFoundException(`Cart not found for user with ID ${userId}`);
//     }

//     await this.cartRepository.remove(userCart);
//   }
// }
