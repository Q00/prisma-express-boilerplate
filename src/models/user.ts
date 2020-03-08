import { IsString, IsDate } from 'class-validator';
import { BaseModel } from './BaseModel';

export class User extends BaseModel {
  @IsString()
  nickname!: string;

  @IsDate()
  birthday!: Date;
}
