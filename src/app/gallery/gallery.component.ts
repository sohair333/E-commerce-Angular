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
  constructor() { }

  ngOnInit(): void {
  }

}
