import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { RoomList } from '../rooms';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges{

  @Input() roomList:RoomList[]=[];

  @Output() roomSelected = new EventEmitter<RoomList>();


  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  selectRoom(room:RoomList){
    this.roomSelected.emit(room);
  }

  ngOnInit(): void {
  }

}
