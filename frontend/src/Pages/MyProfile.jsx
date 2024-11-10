import React, { useState, useEffect, useContext } from "react";
import CommonSection from "../Shared/CommonSection";
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button, Alert } from "reactstrap";
import { AuthContext } from "../context/AuthContext"; 
import { BASE_URL } from "../Utils/config"; 
import "../Styles/myProfile.css"

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Get current user
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return; // If no user, do not fetch
      //console.log(Alert())
      //console.log("Fetching bookings for email:", user.email);
      try {
        const response = await fetch(`${BASE_URL}/booking?email=${user.email}`, {
          credentials: "include", 
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        //console.log("Fetched Bookings:", data.data); 
        setBookings(data.data || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [user]);

   // Filter bookings that match the current user's email
   const filteredBookings = bookings.filter(booking => booking.userEmail === user.email);

   const buddyMatchFinding = async (tourName1,bookAt1) => {

    // Filter bookings by tour name
    const filteredBookingsByTourName = bookings.filter(booking => booking.tourName === tourName1);
    
    // Filter for matching bookings based on user email, buddy status, and needTravelBuddy
    const matchingBookings = filteredBookingsByTourName.filter(booking => 
        booking.userEmail !== user.email && 
        booking.buddyStatus === "pending" && 
        booking.needTravelBuddy 
    );
 
    // If you need just one matching booking, you can use find instead of filter
    const matchingBooking = matchingBookings.length > 0 ? matchingBookings[0] : null;
    console.log("First Matched Booking");
    console.log(matchingBooking);

    const userBooking1 = filteredBookingsByTourName.find(bookings => bookings.buddyStatus === "pending" && bookings.needTravelBuddy && bookings.userEmail === user.email)
    console.log(userBooking1);

    if(matchingBooking != null && matchingBooking.bookAt == bookAt1){
      const updatedBooking = {"buddyStatus":`Matched With ${user.email}`};
      
      await fetch(`${BASE_URL}/booking/${matchingBooking._id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body : JSON.stringify(updatedBooking),
      });
      console.log("UPDATING Booking :",updatedBooking)
      alert("Successfully Matched Found Get Details Soon. Please Reload The Page To get update !!");
    } 
    
    if(matchingBooking!=null){
    console.log(matchingBooking._id)
    }

    if(matchingBooking != null && userBooking1.bookAt==bookAt1){

      const updatedBooking1 = { "buddyStatus":`Matched With ${matchingBooking.userEmail}`};
      if(userBooking1!=null){
      console.log(userBooking1._id)
    }
      await fetch(`${BASE_URL}/booking/${userBooking1._id}`,
        {
          method:"PUT",
          headers:{"content-type":"application/json"},
          body : JSON.stringify(updatedBooking1),
        });
        console.log("UPDATING Booking :",updatedBooking1)

    } else {
      alert("No match found, try again later.");
    }
  }; 

  return (
    <>
      <CommonSection title={"User  Profile Section"} />
      <section>
        <Container>
          <Row>
            <h4><b> Username </b> : {user.username}</h4>
            <h4><b> Email Address </b>: {user.email}</h4>
          </Row>
          <br />
          <Row>
            <h2><b>My Booked Tours :</b> </h2>
          </Row>
          {loading && <h4>Loading...</h4>}
          {error && <h4>{error}</h4>}
          {!loading && filteredBookings.length === 0 && (
            <h4>No Tours Booked</h4>
          )}
          {!loading && filteredBookings.length > 0 && (
            <Row>
              {filteredBookings.map((booking) => (
                <Col lg="4" md="6" sm="6" key={booking.id}>
                  <Card>
                    <CardBody>
                    <CardTitle>Tour Plan Details </CardTitle>
                    <br />
                    <CardText><strong>Tour Name :</strong>{booking.tourName}</CardText>
                      <CardText><strong>Name:</strong> {booking.fullName}</CardText>
                      <CardText><strong>Guest Size:</strong> {booking.guestSize}</CardText>
                      <CardText><strong>Phone:</strong> {booking.phone}</CardText>
                      <CardText><strong>Price:</strong> ₹ {booking.pricePack}</CardText>
                      <CardText><strong>Booked At:</strong> {new Date(booking.bookAt).toLocaleDateString()}</CardText>
                        {/* Conditional rendering for Travel Buddy information */}
                        {booking.needTravelBuddy ? (
                          <>
                          <CardText><strong>Need Travel Buddy:</strong> {booking.needTravelBuddy.toString()}</CardText>
                          <CardText><strong>Buddy Match Status:</strong> {booking.buddyStatus}</CardText>

                          {booking.buddyStatus === "pending" && (
                            <Button color="primary" onClick={() => buddyMatchFinding(booking.tourName,booking.bookAt)}>
                              Update Status
                            </Button>
                          )}
                        </>
                      ) : (<br />) }
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default MyProfile;


                      