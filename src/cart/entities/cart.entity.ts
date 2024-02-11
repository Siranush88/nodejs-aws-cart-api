// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class Cart {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column('uuid')
//   user_id: string;

//   @Column('date')
//   created_at: Date;

//   @Column('date')
//   updated_at: Date;

//   @Column('enum', { enum: ['OPEN', 'ORDERED'] })
//   status: string;
//   items: any;
// }

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ICartItem } from '../models';
import { CartItem } from './cartItem.entity';
//import { CartItem, CartItem } from './cartItem';

@Entity({ name: 'cart' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('date')
  created_at: Date;

  @Column('date')
  updated_at: Date;

  @Column('enum', { enum: ['OPEN', 'ORDERED'] })
  status: string;

  @OneToMany(() => CartItem, (item) => item.cart)
  items: ICartItem[];
}
