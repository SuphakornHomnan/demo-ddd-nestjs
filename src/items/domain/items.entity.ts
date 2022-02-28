import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: {
    createdAt: '_createdAt',
    updatedAt: '_updatedAt',
  },
  versionKey: false,
})
export class Items {
  @Prop()
  name: string;

  @Prop()
  amount: number;

  @Prop()
  describe: string;
}

export const ItemSchema = SchemaFactory.createForClass(Items);
