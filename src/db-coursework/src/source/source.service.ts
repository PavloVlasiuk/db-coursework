import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSourceDTO, UpdateSourceDTO } from './dtos';
import { SourceResponse } from './responses/source.response';

@Injectable()
export class SourceService {
  constructor(private readonly prisma: PrismaService) {}

  async createSource(data: CreateSourceDTO): Promise<SourceResponse> {
    return this.prisma.source.create({
      data,
    });
  }

  async getSource(id: number): Promise<SourceResponse> {
    return this.prisma.source.findUnique({
      where: {
        id,
      },
    });
  }

  async getAllSources(): Promise<SourceResponse[]> {
    return this.prisma.source.findMany();
  }

  async updateSource(id: number, data: UpdateSourceDTO): Promise<SourceResponse> {
    return this.prisma.source.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteSource(id: number): Promise<SourceResponse> {
    return this.prisma.source.delete({
      where: {
        id,
      },
    });
  }
}
