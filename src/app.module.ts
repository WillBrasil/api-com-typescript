import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://258000:258000@cluster0.sv171.mongodb.net/test')
  ],
})
export class AppModule {}
