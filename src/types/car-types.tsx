export enum CarStatus {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE = "UNAVAILABLE",
    SOLD = "SOLD",
  }
  
  export type TCar = {
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    color: string;
    fuelType: string;
    transmission: string;
    bodyType: string;
    seats: number | null;
    description: string;
    status: CarStatus | undefined;
    featured: boolean;
  };
  
  export type TAddCar = {
    carData: TCar;
    images: string[];
  };