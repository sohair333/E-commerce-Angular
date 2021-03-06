import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css'],
})
export class DetailsProductsComponent implements OnInit {
  images: any[] = [];
  imageIndex !:number;
  preview:any='';
  constructor() {}

  ngOnInit(): void {}
  UploadImages(event: any) {
    let files = event.target.files;
    let sliderLength= this.images.length + files.length;
    if(sliderLength>5){
      let limit = 5 - this.images.length;
      for (let x = 0; x < limit; x++) {
        let file = files[x];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.images.push(reader.result);
        };
      }
    }
    else{
      for (let x = 0; x < files.length; x++) {
        let file = files[x];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.images.push(reader.result);
        };
      }
    }
    
  }
  displayImage(item:number){
    this.imageIndex = item;
    this.preview = this.images[item];

  }
  delete(){
    this.images.splice(this.imageIndex,1);
    if(this.images.length == this.imageIndex){
      --this.imageIndex;
      this.preview = this.images[this.imageIndex];

    }
    else{
      this.preview = this.images[this.imageIndex];
    }
    
  }
  prev(){
    --this.imageIndex;
    this.preview = this.images[this.imageIndex];
  }
  next(){
   
    ++this.imageIndex;
    this.preview = this.images[this.imageIndex];

  }
}
