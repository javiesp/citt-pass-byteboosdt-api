import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishlistModule } from './wishlist/wishlist.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://javiesp:Ja22041982@cittpassbd.e658pj0.mongodb.net/',
        retryWrites: true,
        w: 'majority',
      }),
    }),
    WishlistModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
