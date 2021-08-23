import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { FileSaverModule } from 'ngx-filesaver';

import { DataDbService } from '../core/services/db/data-db.service';


import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AdminCreativityComponent } from './components/admin-creativity/admin-creativity.component';
import { AdminRulitComponent } from './components/admin-rulit/admin-rulit.component';
import { AdminEncodeComponent } from './components/admin-encode/admin-encode.component';
import { InviteFormComponent } from './components/admin-encode/invite-form-component/invite-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EncodeLinkPipe } from './components/admin-encode/encode-link.pipe';


@NgModule({
  providers: [
    DataDbService
  ],
  declarations: [
    AdminComponent,
    AdminCreativityComponent,
    AdminRulitComponent,
    AdminEncodeComponent,
    InviteFormComponent,
    EncodeLinkPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    FileSaverModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})

export class AdminModule { }
