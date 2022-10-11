import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.productView().subscribe((data)=>{
      this.photoData=data
    })
  }
  
  photoData:any=[]
  ngOnInit(): void {
  }

}
