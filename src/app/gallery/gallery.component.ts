import { Component, OnInit ,Input } from '@angular/core';
interface Item{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() GalleryData: Item[]=[];
  @Input() showCount =false;
  showMask = false;
  currentLightBOXIMAGE:Item=this.GalleryData[0];
  currentIndex = 0;
  controls=true;
  totalImageCount = 0;
  previewImage=false;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount =this.GalleryData.length;
  }
  onPreviewImage(index:number){
    this.showMask=true;
    this.previewImage=true;
    this.currentIndex = index;
    this.currentLightBOXIMAGE = this.GalleryData[index];
  }

}
