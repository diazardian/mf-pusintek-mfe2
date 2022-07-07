import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TEST_ROUTES } from './main.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TEST_ROUTES)
  ]
})
export class MainModule { }
