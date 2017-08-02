import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';
import { ItemComponent } from './item/item.component';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild([
        {path: '', component: AdminComponent}
      ])
  ],
  declarations: [DashboardComponent, AdminComponent, ItemComponent, ProductComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
