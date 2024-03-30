import { Room } from "@/models/room";


function HotelzzzConfig(dslString: string): { rooms: Room[]; availability: AvailabilityEntry[] } {
    const rooms: Room[] = [];
    const availability: AvailabilityEntry[] = [];
  
    const lines = dslString.split("\n");
  
    let currentSection = null;
  
    for (const line of lines) {
      const trimmedLine = line.trim();
  
      if (trimmedLine.startsWith("#")) {
       
        continue;
      } else if (trimmedLine.endsWith(":")) {
        currentSection = trimmedLine.slice(0, -1).toLowerCase();
      } else if (currentSection) {
        const parts = trimmedLine.split(":").map(part => part.trim());
        const key = parts[0].toLowerCase();
  
        switch (currentSection) {
      
          case "availability":
            const roomId = key;
            const details = parts[1].split(" ");
            availability.push({
              roomId,
              [details[0]]: details.slice(1).join(" "),
            });
            break;
        }
      }
    }
  
    return { rooms, availability };
  }

  interface AvailabilityEntry {
    roomId: string;
    blocked?: string;
    booked?: string;
  
  }
  
  