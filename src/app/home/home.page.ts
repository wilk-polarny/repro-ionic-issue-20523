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
    // I would check here whether form validation marked the form as valid
    
    this.router.navigateByUrl("/page2");
  }

}
