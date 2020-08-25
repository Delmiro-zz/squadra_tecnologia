import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SistemaService } from '../sistema.service';
import { Sistema } from '../sistema';

@Component({
  selector: 'app-update-sistema',
  templateUrl: './update-sistema.component.html',
  styleUrls: ['./update-sistema.component.css']
})
export class UpdateSistemaComponent implements OnInit {

  id: number;
  sistema: Sistema;

  constructor(private route: ActivatedRoute,private router: Router,
    private sistemaService: SistemaService) { }

  ngOnInit() {
    this.sistema = new Sistema();

    this.id = this.route.snapshot.params['id'];
    
    this.sistemaService.getSistema(this.id)
      .subscribe(data => {
        console.log(data)
        this.sistema = data;
      }, error => console.log(error));
  }

  updateSistema() {
    this.sistemaService.updateSistema(this.id, this.sistema)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sistema = new Sistema();
    this.gotoList();
  }

  onSubmit() {
    this.updateSistema();    
  }

  gotoList() {
    this.router.navigate(['/sistema']);
  }
}
