import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const numb = window.scrollY;
    console.log(window.innerHeight, numb, this.scrollService.scrolled3);
    this.scrollService.scrolled = numb >= window.innerHeight / 2;
    this.scrollService.scrolled2 = numb >= window.innerHeight;
    this.scrollService.scrolled3 = numb >= window.innerHeight * 1.5;
  }

  constructor(private titleService: Title, public scrollService: ScrollService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Home | Giovan Battista Caruso');
    console.log(this.scrollService.scrolled3);
  }

}
