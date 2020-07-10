import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './module/home/page/home/index.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {
    path: 'login', component: IndexComponent
  }
  ,
  {
    path: '**', component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
