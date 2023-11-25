import { ApiProperty } from '@nestjs/swagger';

export class SourceResponse {
  @ApiProperty({
    description: 'The id of the source',
  })
  id: number;

  @ApiProperty({
    description: 'The name of the source',
  })
  name: string;

  @ApiProperty({
    description: 'The url of the source',
  })
  url: string;
}
