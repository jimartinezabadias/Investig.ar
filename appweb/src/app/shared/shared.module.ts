import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { HeaderDarkComponent } from './components/header-dark/header-dark.component';
import { HeaderDarkIsologoComponent } from './components/header-dark-isologo/header-dark-isologo.component';

import { HeaderQuestionComponent } from './components/header-question/header-question.component';
import { HeaderCreativityComponent } from './components/header-creativity/header-creativity.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';

import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderDarkComponent,
    HeaderDarkIsologoComponent,
    HeaderQuestionComponent,
    HeaderCreativityComponent,
    HeaderAdminComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HeaderDarkComponent,
    HeaderDarkIsologoComponent,
    HeaderQuestionComponent,
    HeaderCreativityComponent,
    HeaderAdminComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
