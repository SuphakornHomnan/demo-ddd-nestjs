import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICreateItemDto } from '../domain/dto/create.item.dto';
import { Items } from '../domain/items.entity';
import { ICreateItemService } from '../interfaces/services/create.item.service.interface';

@Injectable()
export class CreateItemService implements ICreateItemService {
  constructor(@InjectModel('items') private readonly itemModel: Model<Items>) {}

  async create(arg: ICreateItemDto): Promise<Items> {
    return await this.itemModel.create(arg);
  }
}
