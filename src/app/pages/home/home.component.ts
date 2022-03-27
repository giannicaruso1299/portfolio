import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  descriptionHeight: number = 0;
  competenzeHeight: number = 0;
  curriculumHeight: number = 0;
  contattiHeight: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const numb = window.scrollY;
    console.log(numb, this.descriptionHeight, this.competenzeHeight, this.curriculumHeight)
    if (numb >= this.descriptionHeight / 3) {
      this.scrollService.scrolled = true;
      this.scrollService.scroll1 = this.descriptionHeight;
    }
    if (numb >= this.competenzeHeight / 2) {
      this.scrollService.scrolled2 = true;
      this.scrollService.scroll2 = this.competenzeHeight;
    }
    if (numb >= this.curriculumHeight / 1.5) {
      this.scrollService.scrolled3 = true;
      this.scrollService.scroll3 = this.curriculumHeight;
    }
  }

  constructor(private titleService: Title, public scrollService: ScrollService) {

  }

  ngOnInit(): void {
    this.scrollService.scrolled = true;
    this.descriptionHeight = document.querySelector('#chisono')!.getBoundingClientRect().top;
    this.scrollService.scrolled = false;
    this.scrollService.scroll1 = this.descriptionHeight;

    this.scrollService.scrolled2 = true;
    this.competenzeHeight = document.querySelector('#competenze')!.getBoundingClientRect().top;
    this.scrollService.scrolled2 = false;
    this.scrollService.scroll2 = this.competenzeHeight;

    this.scrollService.scrolled3 = true;
    this.curriculumHeight = document.querySelector('#curriculum')!.getBoundingClientRect().top;
    this.scrollService.scrolled3 = false;
    this.scrollService.scroll3 = this.curriculumHeight;

    /** this.contattiHeight = document.querySelector('#contatti')!.getBoundingClientRect().top;
    console.log(this.contattiHeight)
    this.scrollService.scroll4 = this.contattiHeight; **/

    this.titleService.setTitle('Home | Giovan Battista Caruso');
  }

}
