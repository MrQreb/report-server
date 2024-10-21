import { Injectable } from '@nestjs/common';

import PdfPrinter from 'pdfmake';
import type { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';


const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
  },
};

@Injectable()
export class PrinterService {

  //Configuracion de fonts
  private printer = new PdfPrinter(fonts);

  createPdf(
    docDefinitions: TDocumentDefinitions,
    options: BufferOptions = {},
  ): PDFKit.PDFDocument {
    return this.printer.createPdfKitDocument(docDefinitions, options);
  }

}
