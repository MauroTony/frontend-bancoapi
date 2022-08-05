import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ContaModule, ContaRoutingModule, CadastroModule, CadastroRoutingModule } from './Cliente';
import { SharedModule } from './shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeModule, HomeRoutingModule, } from './Dasboard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ContaModule,
    ContaRoutingModule,
    CadastroModule,
    CadastroRoutingModule,
    SharedModule,
    MatDialogModule,
    HomeModule,
    HomeRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
