import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { ProductSchema, WishListSchema } from './entities/wishlist.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'WishList', schema: WishListSchema }]),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
