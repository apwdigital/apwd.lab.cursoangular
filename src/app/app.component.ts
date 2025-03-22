import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";
import { SignalsComponent } from "./components/signals/signals/signals.component";
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { ApwAdminComponent } from "./components/apw-admin/apw-admin.component";
import { AngularPipesComponent } from "./components/pipes/angular-pipes/angular-pipes.component";
import { ReactiveFormsComponent } from "./components/forms/reactive-forms/reactive-forms.component";
import { TemplateDrivenFormsComponent } from "./components/forms/template-driven-forms/template-driven-forms.component";


@Component({
  selector: 'app-root',
  standalone: true, //NEW (antigo ngmodel)
  imports: [
    CommonModule,
    //ApwAdminComponent,
    //ReactiveFormsComponent,
    //TemplateDrivenFormsComponent,
    ReactiveFormsComponent
],
  styleUrls: [],
  styles: [`
    h1{
      font-family: Arial, Helvetica, sans-serif;
      }
    `],
  
  template: `    
    <!-- 
      <router-outlet></router-outlet>
      <app-template-binding/>
      <h1>SAMPLE1-APP</h1>
      <app-new-component/>
      <app-template-control-flow/>
      <app-template-variables/> 
      <app-template-deferrable-views/>
      <app-signals/>
      <app-pai-ou-mae/>
      <app-angular-pipes/>
      <app-apw-admin/>
      -->
      <!-- <app-template-driven-forms/> -->
      <app-reactive-forms/>
  `
})
export class AppComponent {
  title = 'sample1-app';
}
