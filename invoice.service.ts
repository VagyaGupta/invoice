import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'https://your-backend-api-url.com/invoices';
  
  constructor(private http:HttpClient ){}

  // createInvoice(){
  //   return this.http.post(this.apiUrl, invoiceData);
  // }
}
