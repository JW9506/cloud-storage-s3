import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingSpinnerService } from './services/loading-spinner/loading-spinner.service';
import { UserManagementService } from './services/user-management/user-management.service';

export interface MatDialogData {
  closeDialog: () => void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public um: UserManagementService,
    public ls: LoadingSpinnerService
  ) {}

  ngOnInit(): void {
    this.um.initSync();
  }

}
