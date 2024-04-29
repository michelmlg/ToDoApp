import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from "../tarefa";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  emEdicao = false
   @Input () tarefa: Tarefa = new Tarefa("", false)
   //^^ decorador acima 

   @Output() removeTarefa = new EventEmitter();
   @Output() modificaTarefa = new EventEmitter();

}
