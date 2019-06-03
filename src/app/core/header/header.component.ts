import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  
  constructor(private authentication: AuthenticationService) { }


  clickmobile(){
    // if(this.isCollapsed)
      this.isCollapsed=!this.isCollapsed
  }

  ngOnInit() {
  }

  logout() {
      this.authentication.logout();
  }

}
