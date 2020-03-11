import { BaseModel } from './BaseModel';
import { IsEnum, IsString, IsObject } from 'class-validator';
import { User } from './User';

export enum Provider {
  KAKAO = 'kakao',
}

export class UserAccount extends BaseModel {
  @IsEnum(Provider)
  provider?: Provider;

  @IsString()
  clientId?: string;

  @IsObject()
  user?: User;
}
