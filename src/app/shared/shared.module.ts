import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule
  ],
})
export class SharedModule { }
