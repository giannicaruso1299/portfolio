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
    document.getElementById('navbarNav')!.classList.remove('show');
    this.titleService.setTitle(`${section} | Giovan Battista Caruso`);
    switch (section) {
      case 'Chi sono':
        this.scrollService.scrolled = true;
        window.scrollTo(0, this.scrollService.scroll1);
        break;
      case 'Competenze':
        this.scrollService.scrolled = true;
        this.scrollService.scrolled2 = true;
        window.scrollTo(0, this.scrollService.scroll2);
        break;
      case 'Curriculum':
        this.scrollService.scrolled = true;
        this.scrollService.scrolled2 = true;
        this.scrollService.scrolled3 = true;
        window.scrollTo(0, this.scrollService.scroll3);
        break;
      case 'Contatti':
        this.scrollService.scrolled = true;
        this.scrollService.scrolled2 = true;
        this.scrollService.scrolled3 = true;
        window.scrollTo(0, this.scrollService.scroll4);
    }
  }

}
