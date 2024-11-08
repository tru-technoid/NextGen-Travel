import React, { useContext, useEffect, useState } from "react";
import "./booking.css";
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../Utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
    needTravelBuddy: false, // Added new state for travel buddy toggle
    buddyStatus : "pending",
  });

  const handleChange = (e) => {
    const { id, value, checked } = e.target;

    if (id === "needTravelBuddy") {
      setBooking((prev) => ({
        ...prev,
        needTravelBuddy: checked,
        guestSize: checked ? 1 : prev.guestSize, // Set guestSize to 1 if checked
      }));
    } else {
      setBooking((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const serviceFee = 100;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  // Send data to server
  const handleClick = async (e) => {
    e.preventDefault();

    if (booking.needTravelBuddy && booking.guestSize > 1) {
      return alert("If you need a travel buddy, guest size should be 1.");
    }

    try {
      if (!user) {
        return alert("Please Sign In !!");
      }
      const res = await fetch(`${BASE_URL}/booking/`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...booking, pricePack: totalAmount}),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ₹ {price} <span>/ Per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* ====Booking Form Start==== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              value={booking.guestSize} // Ensure the input reflects the state
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <label>Need Travel Buddy :  </label>
            <label className="toggle-switch">
              <input
                type="checkbox"
                id="needTravelBuddy"
                checked={booking.needTravelBuddy} // Reflect the state
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
          </FormGroup>
        </Form>
      </div>
      {/* ====Booking Form End==== */}

      {/* ====Booking Bottom==== */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ₹ {price} <i class="ri-close-line"> Per person</i>
            </h5>
            <span>₹ {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>₹ {serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Total</h5>
            <span>₹ {totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
