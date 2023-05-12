import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h3>Total Bookings: {bookings.length}</h3>
    </div>
  );
};

export default Bookings;
