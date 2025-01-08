import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';


@Component({
  selector: 'app-payment-detail-form',
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {

  constructor(public service: PaymentDetailService){

  }

  onSubmit(form:NgForm){
    if(this.service.formData.paymentDetailID == 0)
      this.insertRecord(form)
    else
      this.updateRecord(form)
  }

  insertRecord(form:NgForm){
    this.service.postPaymentDetail()
    .subscribe({
      next:res=>{
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form)
      },
      error: err => {console.log(err)}
    })
  }

  updateRecord(form:NgForm){
    this.service.putPaymentDetail()
    .subscribe({
      next:res=>{
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form)
      },
      error: err => {console.log(err)}
    })
  }

}
