import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AutosComponent } from './autos/autos.component';

import { BasicService } from './services/basic.service';

import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BootstrapModalModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent,AutosComponent],
  entryComponents: [ConfirmComponent]
})
export class AppModule { }
