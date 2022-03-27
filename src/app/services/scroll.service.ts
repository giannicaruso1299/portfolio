import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrolled: boolean = false;
  scrolled2: boolean = false;
  scrolled3: boolean = false;

  scroll1: number = 0;
  scroll2: number = 0;
  scroll3: number = 0;
  scroll4: number = 0;

  constructor() { }
}
