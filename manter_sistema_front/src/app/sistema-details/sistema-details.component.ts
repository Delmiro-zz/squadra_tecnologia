import { Component, OnInit, Input } from '@angular/core';
import { SistemaService } from '../sistema.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Sistema } from '../sistema';

@Component({
  selector: 'app-sistema-details',
  templateUrl: './sistema-details.component.html',
  styleUrls: ['./sistema-details.component.css']
})
export class SistemaDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['sistema']);
  }
}
