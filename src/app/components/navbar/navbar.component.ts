import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private titleService: Title, public scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  onSectionClick(section: string) {
    this.titleService.setTitle(`${section} | Giovan Battista Caruso`);
    switch (section) {
      case 'Chi sono':
        this.scrollService.scrolled = true;
        break;
      case 'Competenze':
        this.scrollService.scrolled2 = true;
        break;
      case 'Curriculum':
        this.scrollService.scrolled3 = true;
        break;
    }
  }

}
