import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})

export class SettingComponent implements OnInit {

  currentlyChange = '';


  zooms = [
    {value: '75%', viewValue: '75%'},
    {value: '100%', viewValue: '100%'},
    {value: '125%', viewValue: '125%'}

  ];
  constructor() { }

  zoomChange(event: any) {
    this.currentlyChange = event.target.value;
    document.body.style.zoom  = event.target.value ;
  }

  ngOnInit() {
  }

  onPrint() {
    window.print();
  }

}
