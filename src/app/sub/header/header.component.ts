import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  mobileToggle = false;
  toggle() {
    console.log('toggle ', this.mobileToggle);
    this.mobileToggle = !this.mobileToggle;
  }
}
