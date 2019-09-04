import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'personas', loadChildren: './Pages/personas/personas.module#PersonasPageModule' },
  { path: 'personas-form', loadChildren: './Pages/personas-form/personas-form.module#PersonasFormPageModule' },
  { path: 'personas-editar/:id', loadChildren: './Pages/personas-form/personas-form.module#PersonasFormPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
