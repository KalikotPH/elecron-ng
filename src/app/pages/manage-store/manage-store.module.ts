/* BytesCrafter */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageStoreRoutingModule } from './manage-store-routing.module';
import { ManageStoreComponent } from './manage-store.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ManageStoreComponent
  ],
  imports: [
    CommonModule,
    ManageStoreRoutingModule,
    NgxSkeletonLoaderModule,
    NgxSpinnerModule,
    FormsModule,
    CollapseModule.forRoot(),
    TabsModule,
    ChartsModule,
    NgxPaginationModule
  ]
})
export class ManageStoreModule { }
