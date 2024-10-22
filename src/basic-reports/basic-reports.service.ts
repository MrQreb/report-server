import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetterReport, getHelloReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit  {

  //LLamo servicio e inizializo
  constructor( private readonly printerService:PrinterService){
    super();
  }
  
  async onModuleInit() {
    await this.$connect();
  }

   hello() { 
    
    const docDefinition = getEmploymentLetterReport();
    this.printerService.createPdf(docDefinition)
    return this.printerService.createPdf(docDefinition)
  }

}
