import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList = ['learning', 'playing', 'teaching', 'music listening', 'guitar playing'];
  title = 'Components';

  @ViewChild('childRef', { static: false })
  childComponent: ChildComponent;

  @ViewChild('inputText', { static: false })
  input: ElementRef;

  selected(task: string): void {
    console.log(task);
  }

  add(input: HTMLInputElement) {
    this.tasksList.push(input.value);
    this.input.nativeElement.value = '';

  }
}
