import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-settings-amani',
  templateUrl: './card-settings-amani.component.html',
  styleUrls: ['./card-settings-amani.component.css']
})
export class CardSettingsAmaniComponent implements OnInit {
  @Input() entity: any;
  @Input("attributesP") attributes: any;
  @Output() updateEntity = new EventEmitter<any>();

 

  onSubmit() {
    if (this.validateForm()) {
      this.updateEntity.emit(this.entity);
    }
  }

  validateForm() {
    // Add form validation logic here
    return true;
  }

  ngOnInit(): void {
    

  }

}
