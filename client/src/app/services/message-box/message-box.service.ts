import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface MatDialogData {
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageBoxService {
  constructor(private dialog: MatDialog) {}
}
