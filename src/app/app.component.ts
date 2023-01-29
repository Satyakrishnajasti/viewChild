import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  title = 'view-child';

  @ViewChild('content') content?: any;
  @ViewChild('button') button?: ElementRef;

  @ViewChild(ParentComponent) child!: ParentComponent;

  changeGrandson(){
    this.child.changeChild();
  }


  changeColor() {
    this.content.nativeElement.innerText = 'Welcome in India';
    this.content.nativeElement.setAttribute('class', 'welcome');
    this.content.nativeElement.style.cursor = 'pointer';
  }

  ngAfterViewInit() {
    let button = document.createElement('BUTTON');
    button.innerHTML = 'button';
    button.setAttribute('class', 'button');
    document.body.append(button);
    console.log(button);
    this.content.nativeElement.style.color = 'red';
    this.content.nativeElement.addEventListener('click', this.changeColor());

  }

  ngAfterViewChecked(): void {
    console.log(this.content.nativeElement);
  }


}
