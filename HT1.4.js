const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 311;
const padik = roomNumber/(roomsOnFloor*floors);
const etash = (roomNumber/roomsOnFloor)/(floors*roomsOnFloor);
console.log(padik.toFixed(), etash.toFixed())   