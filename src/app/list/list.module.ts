import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { ListComponent } from './list.component';
import { ListService } from './list.service';
import { AppCoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    CardComponent, ListComponent
  ],
  exports: [
    CardComponent, ListComponent
  ],
  entryComponents: [],
  providers: [
    ListService
  ]
})
export class ListModule { }
