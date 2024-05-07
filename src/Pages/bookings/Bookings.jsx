import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  const handleDelete = (id)=> {
    const proceed = confirm(
      'are you sure you want to delete'
    )
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data =>{
        console.log(data)
        if(data.deletedCount> 0){
          alert('deleted successfully')
          const remaining = bookings.filter(booking => booking._id !==id)
          setBookings(remaining)
        }
      })
    }
  }
  return (
    <div>
      <h2>Your booking: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingRow booking={booking} handleDelete={handleDelete} key={booking._id}> </BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
