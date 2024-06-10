import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WishList } from './entities/wishlist.entity';
import { Model } from 'mongoose';

@Injectable()
export class WishlistService {
  constructor(@InjectModel(WishList.name) private readonly wishListModel: Model<WishList>) {}
  
  
  create(createWishlistDto: CreateWishlistDto) {
    return 'This action adds a new wishlist';
  }

  findAll() {
    return `This action returns all wishlist`;
  }

  async findAllWishLists() : Promise<WishList[]>{
    return await this.wishListModel.find().exec();
  }

  async findOneWishList(id: string): Promise<WishList> {
    return await this.wishListModel.findById(id).exec();
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} wishlist`;
  }
}
