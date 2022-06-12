import { Component } from '@angular/core';

@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponent{
  nombre : string= 'Ironman';
  edad   :number = 45;

  obtenerNombre():string{
      return `Mi nombre es ${this.nombre} y tengo ${this.edad} de edad`;
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 35
  }

}
