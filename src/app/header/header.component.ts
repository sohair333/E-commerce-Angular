import { Component, OnInit ,Output , EventEmitter} from '@angular/core';

// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featuredSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  // onSelect(feature :string){

    
  //   this.featuredSelected.emit(feature);

  // }

}
