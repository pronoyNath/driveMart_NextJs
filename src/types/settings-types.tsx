export type TWorkingHour = {
    id: string;
    dealershipId: string;
    dayOfWeek: TDayOfWeek;
    openTime: string; // "HH:MM" format
    closeTime: string; // "HH:MM" format
    isOpen: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type TDayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

  export type TUserRole = "USER" | "ADMIN";
