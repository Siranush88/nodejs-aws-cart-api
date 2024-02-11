import { ICart } from '../models';
import { Repository } from 'typeorm';
export declare class CartService {
    private readonly cartRepository;
    constructor(cartRepository: Repository<ICart>);
    findByUserId(userId: string): Promise<ICart | undefined>;
    createByUserId(userId: string): Promise<ICart>;
    findOrCreateByUserId(userId: string): Promise<ICart>;
    updateByUserId(userId: string, { items }: ICart): Promise<ICart>;
    removeByUserId(userId: any): Promise<void>;
}
