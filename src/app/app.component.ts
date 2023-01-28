import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'view-child';

  @ViewChild('content') content?: any;
  @ViewChild('button') button?: any;


  changeColor() {
    this.content.nativeElement.innerText = 'Welcome';
  }

  ngAfterViewInit() {
    this.content.nativeElement.style.color = 'red';
    this.content.nativeElement.addEventListener('click', this.changeColor());
  }


}
