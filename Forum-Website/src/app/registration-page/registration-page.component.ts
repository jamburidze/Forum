import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  constructor(private router: Router) {}

  login(){
    this.router.navigate(["home-page"])
  }
}
