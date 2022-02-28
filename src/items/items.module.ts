import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateItemApplication } from './applications/create.item.application';
import { ItemController } from './controller/items.controller';
import { ItemSchema } from './domain/items.entity';
import { TYPES } from './interfaces/types';
import { CreateItemService } from './services/create.item.service';

const createItemService = {
  provide: TYPES.services.ICreateItemService,
  useClass: CreateItemService,
};

const createItemApplication = {
  provide: TYPES.applications.ICreateItemApplication,
  useClass: CreateItemApplication,
};

@Module({
  imports: [MongooseModule.forFeature([{ name: 'items', schema: ItemSchema }])],
  controllers: [ItemController],
  providers: [createItemService, createItemApplication],
})
export class ItemsModule {}
