import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <div>My First Component</div>
  </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  pageTitle : string = 'Product Management';
}
