import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule, 
    NewComponentComponent
  ],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss',
})
export class TemplateVariablesComponent implements AfterViewInit {

  // ==================== AfterViewInit
  // é um ciclo de vida do ng
  
  @ViewChild('name') public nameInput!: ElementRef; // !: inicia sem valor
  @ViewChild('h2') public nameH2!: ElementRef;
  @ViewChild(NewComponentComponent) public childComponent!: NewComponentComponent;

  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.childComponent.name);
  }

  // ==================== AfterViewInit
}