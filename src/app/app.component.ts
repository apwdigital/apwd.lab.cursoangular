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
import { ContentComponent } from "./components/content/content.component";
import { HostElementsComponent } from "./components/host-elements/host-elements.component";
import { ConsumeServiceComponent } from "./components/consume-service/consume-service.component";
import { ConsumeService2Component } from "./components/consume-service2/consume-service2.component";


@Component({
  selector: 'app-root',
  standalone: true, //NEW (antigo ngmodel)
  imports: [
    RouterOutlet,
    CommonModule,
    ApwAdminComponent,
    AngularPipesComponent
],
  styleUrls: [],
  styles: [`
    h1{
      font-family: Arial, Helvetica, sans-serif;
      }
    `],
  
  template: `
    <h1>Curso Angular</h1>    
    <!-- 
      <app-apw-admin/>
      <app-template-binding/>
      <h1>SAMPLE1-APP</h1>
      <app-new-component/>
      <app-template-control-flow/>
      <app-template-variables/> 
      <app-template-deferrable-views/>
      <app-signals/>
      <app-pai-ou-mae/>
      <app-angular-pipes/>
      
      
      <app-reactive-forms/>
      -->
      <!-- <app-template-driven-forms/> -->
      
      <!-- Aula app-content -->
      <!-- <app-content>
        <header id="header">
          <p>Header</p>
        </header>
        
        <p text1>TEXT1</p>
        <p text3>TEXT3</p>
        <p>TEXT2</p>
        
        <footer class="footer">
          <p>Footer</p>
        </footer>
        <p>TEXT4</p>
      </app-content> -->
      
      <!-- <app-host-elements>
        <p>host-elements</p>
      </app-host-elements>       
      <app-consume-service2>
        -->
        <app-angular-pipes/>
      <!-- <h2>Rotas</h2>
      <router-outlet></router-outlet> -->
  `
})
export class AppComponent {
  title = 'sample1-app';
}
