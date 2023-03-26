import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-card-table-amani',
  templateUrl: './card-table-amani.component.html',
  styleUrls: ['./card-table-amani.component.css']
})
export class CardTableAmaniComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter<{id: number, index: number}>();
  @Output() updateEvent = new EventEmitter<{id: number}>();

  delete(id: number, index: number) {
    this.deleteEvent.emit({id, index});
  }
  update(id: number) {
    this.updateEvent.emit({id});
  }
  @Input("title") myTitle
  @Input("dataArray") dataArray
  @Input("colnames") mycolnames
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  constructor() { }

  ngOnInit(): void {
  }

}
