import { Component } from '@angular/core';
import {VIDEOS, VIDEOS1, VIDEOS2, VIDEOS3} from '../shared/models/video';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public videos = VIDEOS;
  public videos1 = VIDEOS1;
  public videos2 = VIDEOS2;
  public videos3 = VIDEOS3;
  constructor(public router: Router) {
  }
  public openNavVideoPlay(itemId: number): void {
    this.router.navigate(['videoplay', itemId]);
  }

}
