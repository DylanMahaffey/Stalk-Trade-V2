import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CropManagerRoutingModule } from './crop-manager-routing.module';
import { AddCropComponent } from './add-crop/add-crop.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';
import { DisplayCropsComponent } from './display-crops/display-crops.component';

@NgModule({
  declarations: [AddCropComponent, CropDetailsComponent, DisplayCropsComponent],
  imports: [
    CommonModule,
    CropManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CropManagerModule { }
