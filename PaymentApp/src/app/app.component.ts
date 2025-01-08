import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaymentDetailsComponent,NgFor],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'PaymentApp';
}
