import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gafete',
  templateUrl: './gafete.component.html',
  styleUrls: ['./gafete.component.css']
})
export class GafeteComponent implements OnInit {

  @Input() federacion:string='Federación Mexicana de Fútbol';
  @Input() club_usuario:string='America';
  @Input() nombre_usuario:string='Ivan Gabriel Tapia Sánchez';
  @Input() id_usuario:string='1586901s';

  constructor() { }

  ngOnInit(): void {
  }

}
