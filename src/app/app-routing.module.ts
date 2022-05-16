import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const approutes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
