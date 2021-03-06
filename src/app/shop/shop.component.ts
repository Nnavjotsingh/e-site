import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggleOpenSidenav() {

    this.SideNavigationToggle.emit();
}
}