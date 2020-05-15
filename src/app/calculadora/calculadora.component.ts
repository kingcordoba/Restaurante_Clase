import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  operandoA:number;
  operandoB:number;
  resultado:number;

  onSumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }

  onRestar():void{
    this.resultado = this.operandoA - this.operandoB;
  }

  onMultiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }

  onDividir():void{
    this.resultado = this.operandoA / this.operandoB;
  }

  constructor() { }

  ngOnInit(): void {
  }

}


