import { Component } from '@angular/core';
import { Sidebar } from '../service/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterOutlet],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
    constructor(private sidebar: Sidebar){}
  toggleMenu(){
    this.sidebar.toggleSidebar();
  }
}
