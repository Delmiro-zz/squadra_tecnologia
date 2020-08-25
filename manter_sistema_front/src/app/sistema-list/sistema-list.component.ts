import { Observable } from "rxjs";
import { SistemaService } from "../sistema.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Sistema } from '../sistema';

@Component({
  selector: "app-sistema-list",
  templateUrl: "./sistema-list.component.html",
  styleUrls: ["./sistema-list.component.css"]
})
export class SistemaListComponent implements OnInit {
  sistema: Observable<Sistema[]>;

  constructor(private sistemaService: SistemaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    debugger
    this.sistema = this.sistemaService.read();
  }

  deleteSistema(id: number) {
    this.sistemaService.deleteSistema(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  sistemaDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateSistema(id: number){
    this.router.navigate(['update', id]);
  }
}
