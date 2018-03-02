import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';
import {ItemsService} from '../../items.service';
import { ItemsComponent } from './items.component';
import {FormsModule}  from '@angular/forms';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule, FormsModule],
  declarations: [ItemsComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
