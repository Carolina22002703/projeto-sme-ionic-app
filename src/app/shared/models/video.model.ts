export class VideoModel {

  public id?: number;
  public image?: string;
  public description?: string;
  public url?: string;
  constructor(videoModel?: VideoModel) {
    this.id = videoModel ? videoModel.id : null;
    this.image = videoModel ? videoModel.image : null;
    this.description = videoModel ? videoModel.description : null;
    this.url = videoModel ? videoModel.url : null;
  }
}
