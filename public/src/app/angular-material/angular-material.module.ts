import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, 
  MatButtonModule,  
  MatDialogModule,
  MatCardModule,MatToolbarModule,
  MatTooltipModule, 
  MatSnackBarModule, 
  MatMenuModule, 
  MatIconModule, 
  MatToolbar, 
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatFormFieldModule 
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatFormFieldModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatFormFieldModule
  ] 
})
export class AngularMaterialModule { }
