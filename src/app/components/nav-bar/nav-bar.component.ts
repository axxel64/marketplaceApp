import { Component } from '@angular/core';
import { MENU_ITEMS } from '../../constants/nav.constants';
import { MenuItem } from '../../interfaces/menu.interface';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public iconName = "fa-house";
  public items:MenuItem[];
  menuOpen = false;

  constructor(){
    this.items=MENU_ITEMS;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
