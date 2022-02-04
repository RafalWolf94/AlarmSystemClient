export interface RoomStatus {
  deviceNumber: number,
  doorTemperatureMeasure: number,
  doorHumidityMeasure: number,
  roomTemperatureMeasure: number,
  roomHumidityMeasure: number,
  isFire: boolean,
  isFlood: boolean,
  isMovement: boolean,
  isDoorOpen: boolean
}
