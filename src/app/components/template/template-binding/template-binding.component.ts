import { Component } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public name = 'APW Digital';
  public age = 32;
  public condition = this.age > 1 ? 'Teste' : 'Teste2';

  public isDisabled = true;
  public srcValue =
    'http://ess-gestor-line-web.s3-website-us-east-1.amazonaws.com/assets/img/apwLineLogo.png';

  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
//https://github.com/troquatte/curso-angular-latest/blob/master/src/app/components/template/template-binding/template-binding.component.ts
