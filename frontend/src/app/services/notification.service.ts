import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  constructor(public snackBar: MatSnackBar) { }

  succes(message): void {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(message, '', this.config);
  }

  warn(message): void {
    this.config['panelClass'] = ['notification', 'warn'];
    this.snackBar.open(message, '', this.config);
  }
}
