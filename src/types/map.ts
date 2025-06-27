export interface Location {
  lat: number;
  lng: number;
  label: string;
}
export interface GoogleMapComponentProps {
  locations: Location[];
}
