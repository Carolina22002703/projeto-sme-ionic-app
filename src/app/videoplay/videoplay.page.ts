import { Component, OnInit } from '@angular/core';
import {VideoModel} from '../shared/models/video.model';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {VIDEOS} from '../shared/models/video';

@Component({
  selector: 'app-videoplay',
  templateUrl: './videoplay.page.html',
  styleUrls: ['./videoplay.page.scss'],
})
export class VideoplayPage implements OnInit {
  public video: VideoModel;

  constructor(public activatedRoute: ActivatedRoute, public sanitizer:
    DomSanitizer) {
  }

  public ngOnInit(): void {
    const id: number =
      +this.activatedRoute.snapshot.paramMap.get('id');
    this.video = VIDEOS.find(v => v.id === id);
  }
}
