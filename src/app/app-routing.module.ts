import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinServiceComponent } from './pin-service/pin-service.component';
import { SerComponent } from './ser/ser.component';
import { PersistResultsComponent } from './persist-results/persist-results.component';

const routes: Routes = [
  {path:'',redirectTo:'/pinservice' ,pathMatch:'full'},
  {path:'pinservice' , component:PinServiceComponent},
  {path:'persist-results' , component:PersistResultsComponent},
  {path:'ser' , component:SerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule {
  
 }
