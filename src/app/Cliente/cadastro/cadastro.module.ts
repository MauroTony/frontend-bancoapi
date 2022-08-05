import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent, CadastroComponent } from './components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';

import { CadastroService } from './components/services';

@NgModule({
  declarations: [
    CadastrarComponent,
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CadastroService
  ],
  entryComponents: [
    ModalComponent
  ],
})
export class CadastroModule { }
