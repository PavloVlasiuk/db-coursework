import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSourceDTO {
  @ApiProperty({
    description: 'The name of the source',
  })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({
    description: 'The url of the source',
  })
  @IsNotEmpty({ message: 'Url cannot be empty' })
  @IsUrl({}, { message: 'Url must be a URL address' })
  url: string;
}
