import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BaseService } from './base.service';

@NgModule({
  providers: [
    BaseService
  ]
})
export class AppCoreModule { }
