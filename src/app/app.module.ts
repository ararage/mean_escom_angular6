import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AutosComponent } from './autos/autos.component';

import { BasicService } from './services/basic.service';

import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm/confirm.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { ReadAutoComponent } from './read-auto/read-auto.component';
import { CreateAutoComponent } from './create-auto/create-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    ConfirmComponent,
    ReadAutoComponent,
    CreateAutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BootstrapModalModule,
    RouteRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmComponent]
})
export class AppModule { }
