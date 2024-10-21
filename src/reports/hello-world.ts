import { TDocumentDefinitions } from "pdfmake/interfaces"

export const getHelloReport = ():TDocumentDefinitions =>{
    const docDefinition:TDocumentDefinitions = {
        content:['hola']
    }
    return docDefinition
}