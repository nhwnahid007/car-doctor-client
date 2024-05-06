import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {

  const service = useLoaderData();
  const { title,price,_id } = service;
  const {user} = useContext(AuthContext)


  const handleCheckOut = event => {
    event.preventDefault()  
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const date = form.date.value
    const due = form.due.value
    const order = {
      customerName: name,
      email,

       service:_id,
       price: price,


    }
    console.log(order)
  }
  return (
    <div>
      <h2>Book service: {title}</h2>
      <form onSubmit={handleCheckOut} className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="due"
              placeholder="due"
              defaultValue={'$'+price}
              className="input input-bordered"
              required
            />
            
          </div>
        </div>
        <div className="form-control mt-6">
         
          <input className="btn btn-block btn-primary" type="submit" value="Order Confirm" />
        </div>
      </form>
      
    </div>
  );
};

export default CheckOut;
