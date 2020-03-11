import { IsInt, IsDate } from 'class-validator';

export abstract class BaseModel {
  @IsInt()
  id?: number;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;

  @IsDate()
  deletedAt?: Date | null;
}
