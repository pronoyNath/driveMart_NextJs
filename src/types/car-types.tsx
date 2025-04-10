import { CarStatus, Prisma } from "@prisma/client";


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


  



  // ....


// Type for UserSavedCar (you can define it based on your actual model)
type UserSavedCar = {
  userId: string;
  carId: string;
  savedAt: Date;
};

// Type for TestDriveBooking (you can define it based on your actual model)
type TestDriveBooking = {
  bookingId: string;
  carId: string;
  userId: string;
  date: Date;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
};

// Car type definition
export type TFullCar = {
  id?: string;
  make?: string;
  model?: string;
  year?: number;
  price?: Prisma.Decimal | number;
  mileage?: number;
  color?: string;
  fuelType?: string;
  transmission?: string;
  bodyType?: string;
  seats?: number | null;
  description?: string;
  status?: CarStatus | undefined;
  featured?: boolean;
  images?: string[];
  savedBy?: UserSavedCar[];
  testDriveBookings?: TestDriveBooking[];
  createdAt?: string | undefined | Date;
  updatedAt?: string | undefined | Date;
};


