import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageGalleryItemComponent } from './components/image-gallery/image-gallery-item/image-gallery-item.component';

@NgModule({
  declarations: [SearchFormComponent, ButtonComponent, ImageGalleryComponent, ImageGalleryItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SearchFormComponent, ButtonComponent, ImageGalleryComponent, ImageGalleryItemComponent, ReactiveFormsModule]
})
export class SharedModule { }
