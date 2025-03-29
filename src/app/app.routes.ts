import { Routes } from '@angular/router';

//import { canMatchGuard } from './guard/can-match.guard';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'teste1',
        children: [
            {
                path: 'sobre',
                component: SobreComponent,
            },
        ]
    },
    // {
    //     path: '',
    //     //component: AnimationsComponent,
    // },
    {
        path: 'sobre',
        title: 'Sobre',
        //component: SobreComponent,
        //Lazy load component
        loadComponent: () => import('./pages/sobre/sobre.component').then((p) => p.SobreComponent), 
    },
    {
        path: 'servicos/:id',
        //component: ServicosComponent,
        loadComponent: () => import('./pages/servicos/servicos.component'),
        //PS: quando adiciona o export "default" no componente, não precisa usar o .then() 
    },
    // {
    //     path: 'curso',
    //     // loadChildren: () =>
    //     //   import('./pages/curso.routes').then((r) => r.cursoRoutes),
    //     // canMatch: [canMatchGuard],
    // },
    {
        path: '**', // rota coringa
        component: NotFoundComponent
        //loadComponent: () => import('./pages/not-found/not-found.component'),
    },
    //exemplo: Lazy load children
    // {
    //     path: 'curso',
    //     loadChildren: () => import('./pages/curso.routes').then((p) => p.cursoRoutes)
    // },
];
