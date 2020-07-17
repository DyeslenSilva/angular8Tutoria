import { Component } from '@angular/core';
import { SlimLoadingBarComponent, SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8Tutoria';

  constructor(private loadingBar: SlimLoadingBarService, private router: Router){
    this.router.events.subscribe(( event)=>{
      this.navigationInterceptor(event);  
    });

    }

    private navigationInterceptor(event){
      if (event instanceof NavigationStart) {
        this.loadingBar.start();
      }
      if (event instanceof NavigationEnd) {
        this.loadingBar.complete();
      }
      if (event instanceof NavigationCancel) {
        this.loadingBar.stop();
      }
      if (event instanceof NavigationError) {
        this.loadingBar.stop();
      }
    }
  }



