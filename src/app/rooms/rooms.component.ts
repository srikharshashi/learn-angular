import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {



  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    avialableRooms: 10,
    bookedRooms: 5
  };
  roomList: RoomList[] = [];

  constructor() {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Standard",
        amentiews: "Wi-Fi, TV, Air Conditioning",
        price: "100",
        photos: "photo1.jpg",
        checkinTime: new Date("2024-02-17T14:00:00Z"),
        checkoutTime: new Date("2024-02-18T12:00:00Z")
      },
      {
        roomNumber: 2,
        roomType: "Deluxe",
        amentiews: "Wi-Fi, TV, Air Conditioning, Mini-bar",
        price: "150",
        photos: "photo4.jpg",
        checkinTime: new Date("2024-02-17T14:00:00Z"),
        checkoutTime: new Date("2024-02-18T12:00:00Z")
      },
      {
        roomNumber: 3,
        roomType: "Suite",
        amentiews: "Wi-Fi, TV, Air Conditioning, Mini-bar, Jacuzzi",
        price: "200",
        photos: "photo7.jpg",
        checkinTime: new Date("2024-02-17T14:00:00Z"),
        checkoutTime: new Date("2024-02-18T12:00:00Z")
      },
      {
        roomNumber: 4,
        roomType: "Suite",
        amentiews: "Wi-Fi, TV, Air Conditioning, Mini-bar, Jacuzzi",
        price: "200",
        photos: "photo7.jpg",
        checkinTime: new Date("2024-02-17T14:00:00Z"),
        checkoutTime: new Date("2024-02-18T12:00:00Z")
      }
    ];
  }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
