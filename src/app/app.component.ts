import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList = ['learning', 'playing', 'teaching', 'music listening', 'guitar playing'];
  title = 'Components';

  selected(task: string): void {
    console.log(task);
  }
}
