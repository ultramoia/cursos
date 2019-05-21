import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'}
  leia = {name: 'Leia', isJedi: false}
  han = {name: 'Han Solo', isJedi: false}
}
