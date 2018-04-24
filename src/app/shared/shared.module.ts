import { MDBBootstrapModules } from 'ng-mdb-pro';

import { MDBSpinningPreloader } from 'ng-mdb-pro';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'ng-mdb-pro/pro/alerts';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModules,
    ToastModule,
    ToastModule.forRoot(),
  ],
  providers: [MDBSpinningPreloader],
  declarations: [],
  exports: [MDBBootstrapModules, ToastModule],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
