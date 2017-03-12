import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  heroes = ['-12312.34', '-080890', '-567657'];
  myHero = this.heroes[0];
}
