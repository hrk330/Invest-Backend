/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
Schema();
export class User extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  emailId: string;

  @Prop()
  phoneNo: string;

  @Prop()
  language: string;

  @Prop()
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
