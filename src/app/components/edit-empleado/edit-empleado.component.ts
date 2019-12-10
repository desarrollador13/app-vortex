import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmpleadoServiceComponent } from '../../services/empleado-service/empleado-service.component';
import { Router, RouterStateSnapshot } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
	dataEmpleado:any[] = []
	formEmpleados: FormGroup;
  submitted = false;
  arrTipoDocumento:any[] = []
  constructor(
  	private formBuilder: FormBuilder,
    private empleadoService: EmpleadoServiceComponent,
    private router: Router,
  ) { 
  	this.cargaArray()
    this.dataEmpleado = JSON.parse(localStorage.getItem('data'))
    this.formEmpleados = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipo_identificacion: ['', Validators.required],
      n_identificacion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      salario: ['', Validators.required]
    });
  }

  ngOnInit() {
  	
  }

  get f() {
    console.log(this.formEmpleados)
    return this.formEmpleados.controls;
  }

  editEmpleados(event){
  	console.log(this.formEmpleados.value)
    if (
      this.formEmpleados.value.nombres && 
      this.formEmpleados.value.apellidos  &&
      this.formEmpleados.value.tipo_identificacion &&
      this.formEmpleados.value.n_identificacion &&
      this.formEmpleados.value.telefono &&
      this.formEmpleados.value.correo &&
      this.formEmpleados.value.salario 
    ) 
   {
    let id:any =this.dataEmpleado
    this.formEmpleados.value.id_empleado =  id.id_empleado
    this.empleadoService.updateData(this.formEmpleados.value,id.id_empleado).subscribe(data => {
      let response:any = data
        if(response.code == 200){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se guardo La infromación con exito',
            showConfirmButton: false,
            timer: 2400
          })
          setTimeout(() => {
            this.router.navigate(['list/empleados']);
          },2500);
        }else{
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'No se pudo guardar La información',
            showConfirmButton: false,
            timer: 2000
          })
        }
    });
      
    }else{
      this.submitted = true;
      return;
    } 
  }

  private cargaArray(){
    this.arrTipoDocumento.push(
      {name:'nit',alias:'nit'},
      {name:'cc',alias:'cc'}
    )
  }

}
