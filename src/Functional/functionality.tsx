import { Room } from "@/models/room";
import { readFileSync } from "fs";

interface AvailabilityEntry {
  roomId: string;
  blocked?: string; 
  booked?: string;
}

function loadHotelConfig(filePath: string): { rooms: Room[]; availability: AvailabilityEntry[] } {
  const dslString = readFileSync(filePath, "utf-8");
  return HotelzzzConfig(dslString);
}

function HotelzzzConfig(dslString: any): { rooms: Room[]; availability: AvailabilityEntry[] } {

  const rooms: never[] = [];
  const availability: never[] = [];
  const lines = dslString.split("\n");
  for (const line of lines) {
   
  }
  return { rooms, availability };
}

function checkAvailability(rooms: Room[], availability: AvailabilityEntry[], checkinDate: Date, checkoutDate: Date): AvailableRoom[] {
  const availableRooms = [];

  for (const room of rooms) {
    const roomAvailability = availability.find((entry) => entry.roomId === room.id);

    if (!roomAvailability) {
      
      availableRooms.push({ room, isAvailable: true });
      continue;
    }

    
  }

  return availableRooms;
}


const config = loadHotelConfig("hotel_config.dsl");
