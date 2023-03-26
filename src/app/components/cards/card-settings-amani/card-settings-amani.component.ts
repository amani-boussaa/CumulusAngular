import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-settings-amani',
  templateUrl: './card-settings-amani.component.html',
  styleUrls: ['./card-settings-amani.component.css']
})
export class CardSettingsAmaniComponent implements OnInit {
  @Input("dataObject") dataObject
  @Input("dataKey") dataKey
  constructor() { }

  ngOnInit(): void {
    

  }

}
