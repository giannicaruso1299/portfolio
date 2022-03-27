import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  onSectionClick(section: string) {
    this.titleService.setTitle(`${section} | Giovan Battista Caruso`);
  }

}
