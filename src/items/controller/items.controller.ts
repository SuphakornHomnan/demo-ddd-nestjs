import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ICreateItemDto } from '../domain/dto/create.item.dto';
import { ICreateItemApplication } from '../interfaces/applications/create.item.application.interface';
import { TYPES } from '../interfaces/types';

@Controller('items')
export class ItemController {
  constructor(
    @Inject(TYPES.applications.ICreateItemApplication)
    private readonly createItemApp: ICreateItemApplication,
  ) {}

  @Post('')
  async createItem(@Res() res: Response, @Body() arg: ICreateItemDto) {
    await this.createItemApp.create(arg);
    return res.sendStatus(HttpStatus.CREATED);
  }
}
