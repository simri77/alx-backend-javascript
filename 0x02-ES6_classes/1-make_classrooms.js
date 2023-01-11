import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const objectArray = [];
  for (const size of sizes) {
    const obj = new ClassRoom(size);
    objectArray.push(obj);
  }
  return objectArray;
}
