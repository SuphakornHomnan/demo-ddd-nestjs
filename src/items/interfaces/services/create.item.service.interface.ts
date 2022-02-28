import { ICreateItemDto } from 'src/items/domain/dto/create.item.dto';
import { Items } from 'src/items/domain/items.entity';

export interface ICreateItemService {
  create(arg: ICreateItemDto): Promise<Items>;
}
