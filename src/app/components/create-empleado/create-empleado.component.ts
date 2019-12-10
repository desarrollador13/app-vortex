import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmpleadoServiceComponent } from '../../services/empleado-service/empleado-service.component';
import { Router, RouterStateSnapshot } from '@angular/router';
import swal from 'sweetalert';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {

	formEmpleados: FormGroup;
  submitted = false;
  arrTipoDocumento:any[] = []
  constructor(
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoServiceComponent,
    private router: Router,
  ) {
    this.cargaArray()
    
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
    return this.formEmpleados.controls;
  }

  private cargaArray(){
    this.arrTipoDocumento.push(
      {name:'nit',alias:'nit'},
      {name:'cc',alias:'cc'}
    )
  }

  crearEmpleados(event){
    if (this.formEmpleados.invalid) {
      this.submitted = true;
      return;
    }else{
      this.empleadoService.postData(this.formEmpleados.value).subscribe(data => {
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
    } 
  }

}
