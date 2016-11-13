import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private authService: AuthService){}

  ngOnInit(){
    let token = localStorage.getItem("token");
    if(token){
      this.authService.setToken(token);
    }
  }
}
