import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';


@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent,NgFor],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService){

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(id:Number)  {
    this.service.deletePaymentDetail(id)
    .subscribe({
      next:res =>{
        this.service.refreshList()
      },
      error: err => {console.log(err)}
    });
  }

  populateForm(pd:PaymentDetail){
    this.service.formData = Object.assign({},pd);
  }

}
