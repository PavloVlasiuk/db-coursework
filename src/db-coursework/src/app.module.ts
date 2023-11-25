import { Module } from '@nestjs/common';
import { SourceModule } from './source/source.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SourceModule, PrismaModule],
})
export class AppModule {}
