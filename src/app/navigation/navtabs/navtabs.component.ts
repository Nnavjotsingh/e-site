import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
    onToggleOpenSidenav() {

      this.SideNavigationToggle.emit();
  }

}

