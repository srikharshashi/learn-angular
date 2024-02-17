export interface Room{
    avialableRooms:number;
    bookedRooms:number;
    totalRooms:number;
}

export interface RoomList{
    roomNumber:number;
    roomType:string;
    amentiews:string;
    price:string;
    photos:string;
    checkinTime:Date;
    checkoutTime:Date;

}