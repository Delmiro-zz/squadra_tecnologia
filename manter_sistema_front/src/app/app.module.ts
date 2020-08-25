import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSistemaComponent } from './update-sistema/update-sistema.component';
import { IncluirSistemaComponent } from './incluir-sistema/incluir-sistema.component';
import { SistemaDetailsComponent } from './sistema-details/sistema-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    IncluirSistemaComponent,
    SistemaDetailsComponent,
    SistemaListComponent,
    UpdateSistemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
