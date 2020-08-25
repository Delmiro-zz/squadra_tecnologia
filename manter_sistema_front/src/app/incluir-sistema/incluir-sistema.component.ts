import { SistemaService } from '../sistema.service';
import { Sistema } from './../sistema';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-sistema',
  templateUrl: './incluir-sistema.component.html',
  styleUrls: ['./incluir-sistema.component.css']
})
export class IncluirSistemaComponent implements OnInit {

  sistema: Sistema = new Sistema();
  submitted = false;

  constructor(private sistemaService: SistemaService,
    private router: Router) { }

  ngOnInit() {
  }

  newSistema(): void {
    this.submitted = false;
    this.sistema = new Sistema();
  }

  save() {
    this.sistemaService.createSistema(this.sistema).subscribe(data => console.log(data), error => console.log(error));
    this.sistema = new Sistema();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/sistema']);
  }
}
