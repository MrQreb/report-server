import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetterReport } from 'src/reports';
import { contriesReport } from './countries-report';

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

  async getCountryReport(){

    //Madar la datra
    const countries = await this.countries.findMany({
      where:{
        local_name:{
          not:null
        }
      }
    });

    const docDefinition = contriesReport({ countries:countries });
    return this.printerService.createPdf(docDefinition);
  }



}
