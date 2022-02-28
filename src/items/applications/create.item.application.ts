import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ICreateItemDto } from '../domain/dto/create.item.dto';
import { Items } from '../domain/items.entity';
import { ICreateItemApplication } from '../interfaces/applications/create.item.application.interface';
import { ICreateItemService } from '../interfaces/services/create.item.service.interface';
import { TYPES } from '../interfaces/types';

@Injectable()
export class CreateItemApplication implements ICreateItemApplication {
  constructor(
    @Inject(TYPES.services.ICreateItemService)
    private readonly createItemService: ICreateItemService,
  ) {}

  async create(arg: ICreateItemDto): Promise<Items> {
    try {
      return await this.createItemService.create(arg);
    } catch (error) {
      throw new HttpException(
        {
          status: error.status,
          error: error.message,
        },
        error.status,
      );
    }
  }
}
