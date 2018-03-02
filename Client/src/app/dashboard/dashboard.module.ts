import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { ItemsModule } from './items/items.module';
import { ItemsService } from '../items.service';


@NgModule({
  imports: [ThemeModule, DashboardRoutingModule, ItemsModule],
  declarations: [DashboardComponent,CompanyComponent],
  entryComponents: [],
  providers: [ItemsService]
})
export class DashboardModule {}
