import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InvalidEntityIdException } from '../exceptions/InvalidEntityIdException';

@Injectable()
export class SourceByIdPipe implements PipeTransform {
  constructor(private prisma: PrismaService) {}

  async transform(id: number) {
    const source = await this.prisma.source.findFirst({
      where: {
        id,
      },
    });

    if (!source) {
      throw new InvalidEntityIdException('Source');
    }

    return id;
  }
}
