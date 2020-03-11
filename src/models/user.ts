import { IsString, IsDate, IsObject, IsEnum } from 'class-validator';
import { BaseModel } from './BaseModel';
import { UserAccount } from './UserAccount';

export enum Sex {
  MALE = 'male',
  FEMALE = 'female',
}

export class User extends BaseModel {
  @IsString()
  nickname!: string;

  @IsDate()
  birthday!: Date;

  @IsObject()
  userAccount!: UserAccount;

  @IsString()
  userPushId?: string;

  @IsEnum(Sex)
  sex!: Sex;
}
