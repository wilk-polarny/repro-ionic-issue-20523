import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  onSubmit(){
    console.log("HomePage::onSubmit - navigating to page2...");
    this.router.navigateByUrl("/page2");
  }

}
