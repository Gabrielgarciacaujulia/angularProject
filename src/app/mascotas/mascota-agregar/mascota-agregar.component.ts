import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator
} from "@angular/forms";
import { FormBuilder } from "@angular/forms";

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.mascotaForm);
  }
  ngOnInit() {}
}
