import { Component } from '@angular/core';

 export class  Equipo{
  id: number | undefined;
  nombre: string | undefined;
  ciudad!: string;
  director : string | undefined;
}

@Component({
  selector: 'PAGL-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'misequiposfavoritos';
  //equipo = 'misequiposfavoritos';

equipo1 : Equipo = {
id: 1,
nombre:"america",
ciudad : "cali",
director :"maradona"
}
}