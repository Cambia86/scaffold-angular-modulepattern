import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private sharedService:SharedserviceService
  ) { }

  gettestdata(){
    this.sharedService.gettest().subscribe(data=>{
      
    })
  }

  ngOnInit() {
  }

}
