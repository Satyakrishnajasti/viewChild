import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent {
  @ViewChild('hello', { static: false }) helloMessage!: TemplateRef<any>;
}
