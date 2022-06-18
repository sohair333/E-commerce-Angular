import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Item{
  imageSrc:string;
  imageAlt:string;
} 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  @ViewChild('scroll', {static: false}) scroll !:ElementRef ;

  data: Item[] =[
    {
      imageSrc:'https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?size=626&ext=jpg&ga=GA1.2.723611363.1645353369',
      imageAlt:'1'
    },
    {
      imageSrc:'https://img.freepik.com/free-photo/3d-rendering-vintage-minimal-mock-up-bedroom-scandinavian-classic-style_105762-2123.jpg?size=338&ext=jpg&ga=GA1.2.723611363.1645353369',
      imageAlt:'2'
    },
    {
      imageSrc:'https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2000.jpg?size=626&ext=jpg&ga=GA1.2.723611363.1645353369',
      imageAlt:'3'
    },
    {
      imageSrc:'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?size=626&ext=jpg&ga=GA1.2.723611363.1645353369',
      imageAlt:'7'
    },
    {
      imageSrc:'https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?size=626&ext=jpg&ga=GA1.2.723611363.1645353369',
      imageAlt:'8'
    },
    {
      imageSrc:'https://img.freepik.com/free-photo/tv-cabinet-modern-living-room-with-blue-armchair-dark-blue-concrete-wall-background3d-rendering_41470-4627.jpg?size=626&ext=jpg&ga=GA1.2.723611363.1645353369',
      imageAlt:'9'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public  scrollToTop(event:Event) : void{
    if (event) {
      event.preventDefault();
    }
    console.log(this.scroll);
    console.log(this.scroll.nativeElement);
    // this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
    this.scroll.nativeElement.scrollIntoView(0, 0);
  }

}
