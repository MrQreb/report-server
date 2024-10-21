import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloReport } from 'src/reports/hello-world';

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
    
    const docDefinition = getHelloReport();
    this.printerService.createPdf(docDefinition)
    return this.printerService.createPdf(docDefinition)
  }

}
