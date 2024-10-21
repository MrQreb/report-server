import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import PdfPrinter from 'pdfmake';
import type {   TDocumentDefinitions} from 'pdfmake/interfaces';

const fonts = {
  Roboto:{
    normal:'fonts/Roboto-Regular.ttf'
  }
}

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit  {
  
  async onModuleInit() {
    await this.$connect();
  }
 

   hello() {
    const printer = new PdfPrinter(fonts);
    const docDefinition:TDocumentDefinitions ={ 
        content: [ 'hola']
    }

   const doc = printer.createPdfKitDocument(docDefinition)
    return doc;
  }

}
