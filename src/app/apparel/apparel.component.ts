import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.css']
})
export class ApparelComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggleOpenSidenav() {

    this.SideNavigationToggle.emit();
}
}
