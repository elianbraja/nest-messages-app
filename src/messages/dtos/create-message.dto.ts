import { IsString, IsNumber, IsOptional } from "class-validator";
export class CreateMessageDto {
  @IsString()
  content: string

  @IsOptional()
  @IsNumber()
  test: number
}