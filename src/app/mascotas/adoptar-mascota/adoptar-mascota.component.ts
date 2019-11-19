import { Component, OnInit } from '@angular/core';
import { MascotasService } from "../mascotas.service";
import { Mascota } from "src/app/mascotas/mascota";
import { Router, ActivatedRoute } from "@angular/router";
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adoptar-mascota',
  templateUrl: './adoptar-mascota.component.html',
  styleUrls: ['./adoptar-mascota.component.css']
})
export class AdoptarMascotaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotasService,
    private fb: FormBuilder,
    private router:Router
  ) {}
  public mascotas: Array<Mascota> = [];
  
  id: number;

  public mascotaForm = this.fb.group({
    id: [""],
    nombre: ["", [Validators.required, Validators.minLength(4)]],
    tipo: ["", Validators.required],
    edad: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
    descripcion: ["", Validators.required]
  });

 
    
  ngOnInit() {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;

      this.id = parseInt (this.route.snapshot.paramMap.get("id"));

      this.mascotaService.getMascotaId(this.id).subscribe(data => {
        this.mascotaForm.setValue(data);
      });
      
    });
  }

}
