import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponentComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    
    //console.log(this.#apiService.name())

  }
  // Primeira aula
  public name = 'New Component _ Template Variables';

}
