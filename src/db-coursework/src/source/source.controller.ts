import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SourceService } from './source.service';
import { CreateSourceDTO, UpdateSourceDTO } from './dtos';
import { SourceResponse } from './responses/source.response';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { SourceByIdPipe } from './pipes/source-by-id.pipe';

@ApiTags('sorces')
@Controller('sources')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  @ApiOkResponse({
    type: SourceResponse,
  })
  @ApiBadRequestResponse({
    description: `
      Name cannot be empty
      Name must be a string
      Url cannot be empty
      Url must be a URL address`,
  })
  @ApiNotFoundResponse({
    description: `
      Source with such id does not exist`,
  })
  @ApiOperation({
    summary: 'Create a source',
  })
  @Post()
  async createSource(@Body() body: CreateSourceDTO): Promise<SourceResponse> {
    return await this.sourceService.createSource(body);
  }

  @ApiOkResponse({
    type: SourceResponse,
  })
  @ApiNotFoundResponse({
    description: `
      Source with such id does not exist`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'The id of the source',
  })
  @ApiOperation({
    summary: 'Retrieve a source by id',
  })
  @Get(':id')
  async getSource(@Param('id', ParseIntPipe, SourceByIdPipe) id: number): Promise<SourceResponse> {
    return await this.sourceService.getSource(id);
  }

  @ApiOkResponse({
    type: [SourceResponse],
  })
  @ApiOperation({
    summary: 'Retriev all existing sources',
  })
  @Get()
  async getAllSources(): Promise<SourceResponse[]> {
    return await this.sourceService.getAllSources();
  }

  @ApiOkResponse({
    type: SourceResponse,
  })
  @ApiBadRequestResponse({
    description: `
      Name must be a string
      Url must be a URL address`,
  })
  @ApiNotFoundResponse({
    description: `
      Source with such id does not exist`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'The id of the source',
  })
  @ApiOperation({
    summary: 'Update an existing source by its id',
  })
  @Patch(':id')
  async updateSource(
    @Param('id', ParseIntPipe, SourceByIdPipe) id: number,
    @Body() body: UpdateSourceDTO,
  ): Promise<SourceResponse> {
    return await this.sourceService.updateSource(id, body);
  }

  @ApiOkResponse({
    type: SourceResponse,
  })
  @ApiNotFoundResponse({
    description: `
      Source with such id does not exist`,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'The id of the source',
  })
  @ApiOperation({
    summary: 'Delete a source by id',
  })
  @Delete(':id')
  async deleteSouce(
    @Param('id', ParseIntPipe, SourceByIdPipe) id: number,
  ): Promise<SourceResponse> {
    return await this.sourceService.deleteSource(id);
  }
}
