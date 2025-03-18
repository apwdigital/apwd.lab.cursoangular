import { Component } from '@angular/core';
import { NewComponentComponent } from "../../new-component/new-component.component";
import { CommonModule } from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

  public isTrue = false;

  public setAction() {
    this.isTrue = !this.isTrue;
  }

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(5000));
}