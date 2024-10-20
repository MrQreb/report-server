import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateBasicReportDto } from './dto/create-basic-report.dto';
import { UpdateBasicReportDto } from './dto/update-basic-report.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit  {
  
  async onModuleInit() {
    await this.$connect();
  }
  create(createBasicReportDto: CreateBasicReportDto) {
    return 'This action adds a new basicReport';
  }

  findAll() {
    return `This action returns all basicReports`;
  }

  async hello() {
    return this.employees.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} basicReport`;
  }

  update(id: number, updateBasicReportDto: UpdateBasicReportDto) {
    return `This action updates a #${id} basicReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicReport`;
  }
}
