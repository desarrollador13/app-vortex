import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoServiceComponent } from './services/empleado-service/empleado-service.component';
import { HttpClientModule } from '@angular/common/http';
import { TableEmpleadosComponent } from './components/table-empleados/table-empleados.component';
import { EditEmpleadoComponent } from './components/edit-empleado/edit-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEmpleadoComponent,
    EmpleadoServiceComponent,
    TableEmpleadosComponent,
    EditEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
