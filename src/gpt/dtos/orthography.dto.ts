import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class OrthographyDto {
  @IsString()
  @IsNotEmpty()
  readonly prompt: string
  @IsNumber()
  @IsOptional()
  readonly maxTokens: number
}
