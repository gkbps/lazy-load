import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-mdb-pro/pro/alerts';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private toastrService: ToastService) { }

  showSuccess() {
    this.toastrService.success('Info message');
  }

  showError() {
    this.toastrService.error('Warning message');
  }

  ngOnInit() {
  }

}
