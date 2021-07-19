import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormRegistroComponent } from './componentes/form-registro/form-registro.component';

 
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GafeteComponent } from './gafete/gafete.component';
import { VisualizarPdfComponent } from './visualizar-pdf/visualizar-pdf.component';



const ngWizardConfig: NgWizardConfig = {
  theme: THEME.dots
};
 

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    FormularioComponent,
    GafeteComponent,
    VisualizarPdfComponent
  ],
  imports: [
    BrowserModule,
    NgWizardModule.forRoot(ngWizardConfig),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
