import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './Services/Guard/guard.service';

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
  { path: 'personas', canActivate: [GuardService], loadChildren: './Pages/personas/personas.module#PersonasPageModule' },
  { path: 'personas-form', canActivate: [GuardService], loadChildren: './Pages/personas-form/personas-form.module#PersonasFormPageModule' },
  { path: 'personas-editar/:id', canActivate: [GuardService], loadChildren: './Pages/personas-form/personas-form.module#PersonasFormPageModule' },
  { path: 'login', loadChildren: './Pages/Auth/login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
