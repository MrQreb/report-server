import { countries as Country} from "@prisma/client";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { text } from "stream/consumers";

interface ReportOptions {
    title?:string;
    subTitle?:string;
    countries:Country[];
}

export const contriesReport = (options:ReportOptions): TDocumentDefinitions => {

  const { title,subTitle, countries } = options;

  return {
    pageOrientation: 'landscape',
    header: [{ text: 'reporte paises' }],
    content: [
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          headerRows: 1,
          widths: [50,50,50,'*','auto','*',],
          body: [
            ['ID', 'ISO', 'ISO3', 'name', 'Contienent', 'local name'],
            
            //Data
            ...countries.map( contry => [
                contry.id.toString(),
                contry.iso2,
                contry.iso3,
                {text:contry.name, bold:false },
                contry.continent,
                contry.local_name,
            ]),

          ],
        },
      },
    ],
  };
};