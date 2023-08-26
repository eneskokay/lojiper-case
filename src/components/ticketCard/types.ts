interface item {
  from: string;
  to: string;
  tripType: string;
  startDate: Date;
  startTime: string;
  endDate?: Date;
  endTime?: string;
  id: number;
  manPassenger: number;
  womanPassenger: number;
  emptySeats: number;
  price: number;
}

interface Props {
  item: item;
  clickable: boolean;
  navigationFunc?: () => void;
}
export default Props;
