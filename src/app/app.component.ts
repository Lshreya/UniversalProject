import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello</h1>,
            <a routerLink="/about" routerLinkActive="active">ABOUT</a>
            
            `
})
export class AppComponent  { }
