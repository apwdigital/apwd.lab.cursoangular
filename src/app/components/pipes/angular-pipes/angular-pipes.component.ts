import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';

// exemplo de importação local (componente)
// import localPt from '@angular/common/locales/pt';
// registerLocaleData(localPt);
// para importação glocal, transferir para app.config.ts

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    JsonPipe,
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    CustomStringPipe
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
  //providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AngularPipesComponent {

  // Versões antigas: dentro do CommonModule
  public date = new Date();
  public name = "apw digital";
  public nameUpper = "APW DIGITAL UPPER TO LOWER";
  public nameLower = `${this.name} Lower to Upper`;


  public list = [{ 'name': 'apw' }, { 'name': 'ess' }];


  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(500));

}

// CUSTON PIPES
// $ ng g p pipes/custom-string