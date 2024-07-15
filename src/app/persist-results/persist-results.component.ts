import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataSharingServiceService } from '../data-sharing.service.service';

@Component({
  selector: 'app-persist-results',
  templateUrl: './persist-results.component.html',
  styleUrl: './persist-results.component.css'
})


export class PersistResultsComponent implements OnInit {
  route: ActivatedRoute;
  selectedItems: any[] = [];
  edited: boolean = false;
  userId: any;
  
  
  constructor(private router: ActivatedRoute, private dataSharingService: DataSharingServiceService, ) {
     this.route = router;
  }
  
  ngOnInit(): void {
    this.selectedItems = this.dataSharingService.getData();
    console.log('Selected Items in PersistResultsComponent:', this.selectedItems);
  }

  openModal() {
     const userIdModalDiv = document.getElementById('userIdCreateModal');
     if(userIdModalDiv!=null){
      userIdModalDiv.style.display = 'block';
     }
  }

  saveModal() {
    const userIdModalDiv = document.getElementById('userIdCreateModal');
    if(userIdModalDiv!=null){
     userIdModalDiv.style.display = 'none';
     console.log("Received UserId", this.userId);
    }
 }

  closeModal() {
    const userIdModalDiv = document.getElementById('userIdCreateModal');
    if(userIdModalDiv!=null){
     userIdModalDiv.style.display = 'none';
    }
 }

  saveUserId() {
    const userIdModalDiv = document.getElementById('myModal');
    if(userIdModalDiv!=null){
      userIdModalDiv.style.display = 'none';
    }
  }
  clear() {
    this.userId = '';
  }
  saveTodos(): void {
    this.edited = true;
    setTimeout(function() {
    }.bind(this), 3000);
   }
}