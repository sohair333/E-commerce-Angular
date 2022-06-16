import { Component, OnInit ,Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent
  
} from '@angular/animations';
interface Item{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations:[
    trigger('animation',[
      transition("void => visible",[
        style({transform:"scale(0.5)"}),
        animate('150ms',style({transform:'scale(1)'}))
      ]),
      transition('visible => void',[
        style({transform:"scale(1)"}),
        animate('150ms',style({transform:'scale(0.5)'}))
      ]),

    ]),
    trigger('animation2',[
      transition(':leave',[
        style({opacity:1}),
        animate('50ms',style({opacity:0.8}))
      ])

    ])
  ]
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
  onAnimationEnd(event:AnimationEvent){
    if(event.toState === 'void'){
      this.showMask = false;
    }
  }
  onClosePreview(){
    this.previewImage = false;
  }
  next(){
    this.currentIndex = this.currentIndex+1;
    if(this.currentIndex > this.GalleryData.length -1){
      this.currentIndex = 0;
    }
    this.currentLightBOXIMAGE = this.GalleryData[this.currentIndex];
  }
  prev(){
    this.currentIndex = this.currentIndex-1;
    if(this.currentIndex < 0){
      this.currentIndex = this.GalleryData.length -1;
    }
    this.currentLightBOXIMAGE = this.GalleryData[this.currentIndex];
  }

}
