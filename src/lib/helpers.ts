import { TFullCar } from "@/types/car-types";

export const formatCurrency = (amount : number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Helper function to serialize car data
export const serializeCarData = (car: TFullCar, wishlisted = false) => {
  return {
    ...car,
    price: car.price ? parseFloat(car.price.toString()) : 0,
    createdAt: car.createdAt?.toString(),
    updatedAt: car.updatedAt?.toString(),
    wishlisted: wishlisted,
  };
};
