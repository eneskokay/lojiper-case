import React, { useState, createContext } from "react";

interface BookingContextType {
  availableTrips: object[];
  setAvailableTrips: (availableTrips: object[]) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export const BookingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [availableTrips, setAvailableTrips] = useState<object[]>();
  return (
    <BookingContext.Provider
      value={{
        availableTrips: availableTrips,
        setAvailableTrips: setAvailableTrips,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
