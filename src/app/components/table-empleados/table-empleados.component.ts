import { Component, OnInit } from '@angular/core';
import { EmpleadoServiceComponent } from '../../services/empleado-service/empleado-service.component';
import { Router, RouterStateSnapshot } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-table-empleados',
  templateUrl: './table-empleados.component.html',
  styleUrls: ['./table-empleados.component.css']
})
export class TableEmpleadosComponent implements OnInit {
	dataEmpleado:any
  constructor( 
  	private empleadoService: EmpleadoServiceComponent,
  	private router: Router,
  ) { }

  ngOnInit() {
  	this.obtenerEmpleados()
  }

  eliminarEmpleado(item){
  	this.empleadoService.deleteData(item.id_empleado).subscribe(data => {
      let response:any = data
        if(response.code == 200){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'se elimino con exito la información',
            showConfirmButton: false,
            timer: 2400
          })
        }else{
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'No se pudo eliminar La información',
            showConfirmButton: false,
            timer: 2000
          })
        }
        setTimeout(() => {
          this.obtenerEmpleados()
        },2400);
    });
  }

  private obtenerEmpleados(){
  	localStorage.setItem('data','');
  	this.empleadoService.getData().subscribe(data => {
  		setTimeout(() =>{
  			let rows:any = data 
  			this.dataEmpleado = rows.rows
  		},500)
    });
  }

  editarEmpleado(item){
    localStorage.setItem('data', JSON.stringify(item));
    this.router.navigate(['edit/empleados']);
  }
}
