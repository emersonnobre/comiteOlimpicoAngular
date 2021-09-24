import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletaComponentComponent } from './atleta-component/atleta-component.component';

const routes: Routes = [
  {path:'atleta', component: AtletaComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
