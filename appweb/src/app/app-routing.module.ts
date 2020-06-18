import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InstructionsCreativityComponent } from './components/instructionsCreativity/instructionsCreativity.component';
import { TestCreativityComponent } from './components/testCreativity/testCreativity.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'instructions-creativity',
    component: InstructionsCreativityComponent
  },
  {
    path: 'test-creativity',
    component: TestCreativityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
