import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-atleta-component',
  templateUrl: './atleta-component.component.html',
  styleUrls: ['./atleta-component.component.css']
})
export class AtletaComponentComponent implements OnInit {

  atletas : Array<any> = [];

  constructor(private atletaService: AtletaService) { }

  ngOnInit(): void {
    this.listarAtleta();
  }

  listarAtleta()
  {
    this.atletaService.listarAtleta().subscribe(r => {this.atletas = r, console.log(r)}, error => console.log("erro", error))
    
  }

}
