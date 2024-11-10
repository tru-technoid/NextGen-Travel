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
    needTravelBuddy: false,
    buddyStatus: "pending",
  });

  const [errors, setErrors] = useState({ phone: "", fullName: "", bookAt: "" });

  const handleChange = (e) => {
    const { id, value, checked } = e.target;
  
    if (id === "needTravelBuddy") {
      setBooking((prev) => ({
        ...prev,
        needTravelBuddy: checked,
        guestSize: checked ? 1 : prev.guestSize,
      }));
    } else if (id === "phone") {
      // Allow only numeric input and limit to 10 digits
      if (/^\d{0,10}$/.test(value)) {
        setBooking((prev) => ({
          ...prev,
          phone: value,
        }));
        setErrors((prev) => ({
          ...prev,
          phone: value.length === 10 ? "" : "Phone number should be exactly 10 digits.",
        }));
      }
    } else if (id === "fullName") {
      // Allow only alphabetic input
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setBooking((prev) => ({
          ...prev,
          fullName: value,
        }));
        setErrors((prev) => ({ ...prev, fullName: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          fullName: "Full name should contain only alphabetic characters.",
        }));
      }
    } else if (id === "bookAt") {
      const today = new Date();
      const selectedDate = new Date(value);
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 0);
  
      if (selectedDate >= tomorrow) {
        setBooking((prev) => ({
          ...prev,
          bookAt: value,
        }));
        setErrors((prev) => ({
          ...prev,
          bookAt: "",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          bookAt: "Booking date should be from today onward.",
        }));
      }
    } else if (id === "guestSize") {
      // Ensure guestSize is 1 or more
      const parsedValue = Math.max(1, parseInt(value, 10) || 1);
      setBooking((prev) => ({
        ...prev,
        guestSize: parsedValue,
      }));
      setErrors((prev) => ({
        ...prev,
        guestSize: parsedValue >= 1 ? "" : "Guest size should be 1 or more.",
      }));
    } else {
      setBooking((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceFee = 100;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();

    if (booking.needTravelBuddy && booking.guestSize > 1) {
      return alert("If you need a travel buddy, guest size should be 1.");
    }

    if (booking.phone.length !== 10) {
      return alert("Phone number should be exactly 10 digits.");
    }
    if (errors.bookAt || !booking.bookAt) {
      return alert("Please select a valid booking date starting from tomorrow.");
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
        body: JSON.stringify({ ...booking, pricePack: totalAmount }),
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

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              value={booking.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              value={booking.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </FormGroup>

          <FormGroup>
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.bookAt && <p className="error-text">{errors.bookAt}</p>}
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              value={booking.guestSize}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Need Travel Buddy : </label>
            <label className="toggle-switch">
              <input
                type="checkbox"
                id="needTravelBuddy"
                checked={booking.needTravelBuddy}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
          </FormGroup>
        </Form>
      </div>

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