import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSharingServiceService } from '../data-sharing.service.service';


@Component({
  selector: 'app-pin-service',
  templateUrl: './pin-service.component.html',
  styleUrl: './pin-service.component.css'
})
export class PinServiceComponent {
  pincode: string;
  responseData: any;
  selectedItems: boolean[] = [];  
  
  constructor(private http: HttpClient, private router: Router, private dataSharingService: DataSharingServiceService) {
    this.pincode = "";
  };

  searchPincode() : void {
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json' // Set content type to JSON

    })
    };
    console.log("Inside searchPincode");
    this.http.get<any>('http://localhost:8080/springazure/pinservices/'+this.pincode).subscribe(data => {
      this.responseData = data;
      console.log('Response from API:', this.responseData);
      this.responseData.PostOffice.forEach(() => this.selectedItems.push(false));

    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  submitSelected(): void {
    const selectedRows = this.responseData.PostOffice.filter((_item: any, index: number) => this.selectedItems[index]);
    console.log('Selected Rows:', selectedRows);
    this.dataSharingService.setData(selectedRows);
    this.router.navigate(['/persist-results']);
  }
}
