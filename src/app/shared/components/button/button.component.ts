import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  // @Input() value!: string;
  @Input() label!: string;
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event:any) {
    this.onClick.emit(event);
  }

}
