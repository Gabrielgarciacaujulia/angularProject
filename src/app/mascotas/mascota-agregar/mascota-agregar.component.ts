import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, MinLengthValidator} from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { MascotasService } from "../mascotas.service";
import { Mascota } from "src/app/mascotas/mascota"
import {Router} from "@angular/router"
 
@Component({
  selector: "app-mascota-agregar",
  templateUrl: "./mascota-agregar.component.html",
  styleUrls: ["./mascota-agregar.component.css"]
})
export class MascotaAgregarComponent implements OnInit {
  public mascotaForm = this.fb.group({
    nombre: ["", [Validators.required, Validators.minLength(4)]],
    tipo: ["", Validators.required],
    edad: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
    descripcion: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private mascotasService: MascotasService) {}
  

  onSubmit() {
    
    console.log(this.mascotaForm);
    this.mascotasService.addMascota(this.mascotaForm.value)
  
  }
  ngOnInit() {
    
  }
  private router:Router;

  newChange(): void {
    this.router.navigateByUrl('/mascotas-listar');
}
}
