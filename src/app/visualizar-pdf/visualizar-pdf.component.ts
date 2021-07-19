import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-visualizar-pdf',
  templateUrl: './visualizar-pdf.component.html',
  styleUrls: ['./visualizar-pdf.component.css']
})
export class VisualizarPdfComponent implements OnInit {

  constructor() { 
    this.downloadPDF();
  }

  public downloadPDF():void {
    const DATA: any = document.getElementById('dataPDF');
    const doc = new jsPDF('p', 'pt', 'a4');
    //const doc =new jsPDF();
    // doc.text('hello world',100,10);
    // doc.save('hi.pdf');

    // Añadir imagen Canvas a PDF

    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 90;
      const bufferY = 90;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });

  }

  ngOnInit(): void {
  }

}
