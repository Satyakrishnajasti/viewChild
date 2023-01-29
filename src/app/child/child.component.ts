import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  public visible: boolean = true;

  changeColor() {
    this.visible = !this.visible;
  }
}
