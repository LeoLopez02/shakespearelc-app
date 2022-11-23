import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
})
export class CollapsibleWellComponent {
  @Input() isVisible: boolean = false;
  @Output() makeVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick(): void {
    this.isVisible = !this.isVisible;
    this.makeVisible.emit(this.isVisible);
  }
}
