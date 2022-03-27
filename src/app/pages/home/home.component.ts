import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scrolled = false;
  scrolled2 = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const numb = window.scrollY;
    this.scrolled = numb >= window.innerHeight / 2;
    this.scrolled2 = numb >= window.innerHeight;
  }

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Home | Giovan Battista Caruso');
  }

}
