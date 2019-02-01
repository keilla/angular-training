import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [SearchFormComponent, ButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SearchFormComponent, ButtonComponent]
})
export class SharedModule { }
