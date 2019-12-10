import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { TableEmpleadosComponent } from './components/table-empleados/table-empleados.component';
import { EditEmpleadoComponent } from './components/edit-empleado/edit-empleado.component';


const routes: Routes = [
	{
		path: 'crear/empleados',
    component: CreateEmpleadoComponent
  },
  {
		path: 'list/empleados',
    component: TableEmpleadosComponent
  },
  {
    path: 'edit/empleados',
    component: EditEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
