/* BytesCrafter */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStoreComponent } from './manage-store.component';

const routes: Routes = [
  {
    path: '',
    component: ManageStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageStoreRoutingModule { }
