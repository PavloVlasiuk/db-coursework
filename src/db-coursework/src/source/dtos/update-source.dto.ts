import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateSourceDTO {
  @ApiPropertyOptional({
    description: 'The name of the source',
  })
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'The url of the source',
  })
  @IsUrl({}, { message: 'Url must be a URL address' })
  @IsOptional()
  url?: string;
}
