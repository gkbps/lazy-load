import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-mdb-pro/pro/alerts';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private toastrService: ToastService) {}

  showInfo() {
    this.toastrService.info('Success message');
  }

  showWarning() {
    this.toastrService.warning('Error message');
  }

  ngOnInit() {
  }

}
