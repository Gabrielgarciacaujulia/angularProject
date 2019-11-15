import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MascotasService } from "../mascotas.service";
import { Validators, FormBuilder } from "@angular/forms";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-mascotas-editar",
  templateUrl: "./mascotas-editar.component.html",
  styleUrls: ["./mascotas-editar.component.css"]
})
export class MascotasEditarComponent implements OnInit {

  id:number;

  public mascotaForm = this.fb.group({
    id: [""],
    nombre: ["", [Validators.required, Validators.minLength(4)]],
    tipo: ["", Validators.required],
    edad: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
    descripcion: ["", Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotasService,
    private fb: FormBuilder,
    private router:Router
  ) {}

  ngOnInit() {
    this.id = parseInt (this.route.snapshot.paramMap.get("id"));

    this.mascotaService.getMascotaId(this.id).subscribe(data => {
      this.mascotaForm.setValue(data);
    });
  }

  onSubmit() {
    this.mascotaService.updateMascota(this.mascotaForm.value)
    .subscribe(info => this.router.navigate(['/mascotas-listar'])) 
   }
   cancel() {
    this.router.navigateByUrl("/mascotas-listar");
  }
}
