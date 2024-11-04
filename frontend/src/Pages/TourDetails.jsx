import React,{useRef,useState,useEffect, useContext} from "react";
import "../Styles/tour-details.css";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "./../Utils/AvgRating";
import avatar from "../assets/images/avatar.png";
import Booking from "../Components/Bookings/Booking";
import 'remixicon/fonts/remixicon.css';
import Newsletter from "../Shared/Newsletter";
import useFetch from "../Hooks/useFetch";
import { BASE_URL } from "../Utils/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("")
  const [tourRating, setTourRating]=useState(null);
  const {user} = useContext(AuthContext);

  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  //Fetch Data From Database
  const {data:tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  //submit request to server
  const submitHandler = async e =>{
    e.preventDefault();

    const reviewText = reviewMsgRef.current.value;

    try {

      if(!user || user === undefined || user === null){
        alert("Please Sign In !!")
      }

      const reviewObj = {
        username : user?.username,
        reviewText,
        rating : tourRating,
      }

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method : 'post',
        headers: {
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result = await res.json();
      if(!res.ok){
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
    //For Check alert(${reviewText},${tourRating})

  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour]);

 
    const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const fetchWeatherData = async () => {
    if (!selectedDate) {
      alert("Please select a date!");
      return;
    }

    const apiKey = "149a477cdf88f1a01b95c7e2921344ef"; // Replace with your API key
    //const apiKey = "3b798f5854678990ae199e0033469294";
    const location = tour.city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&dt=${selectedDate}`;

    try {
      const response = await fetch(url);
      const weatherData = await response.json();

      const weatherDescription = weatherData.weather[0].description;   

      const temperature = Math.round((weatherData.main.temp - 273.15) * 10) / 10; // Convert Kelvin to Celsius
      const weatherDisplay = `The weather in ${location} on ${selectedDate} is ${weatherDescription} with a temperature of ${temperature}°C`;

      setWeatherData(weatherData);
      document.getElementById("weather-data").textContent = weatherDisplay;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching weather data.");
    }
  };

  // destructure properties from tour opbject
  const {
    photo,
    title,
    dayPack,
    nightPack,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
    geoTitle,
    geoUrl,
    direcUrl,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className="text-center pt-5">Loading.....</h4>
          }
          {
            error && <h4 className="text-center pt-5">{error}</h4>
          }
          {
            !loading && !error &&
            <Row>
            <Col lg="8">

              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-s-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                    ₹ {price} / per person
                    </span>
                    <span>
                      <i class="ri-map-pin-time-line"></i>
                      {distance} k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>

                {/* ... 360 View ... */}                  
                  
                  <br />
                  <div className="geo_three">
                      <h2>3D View Of {geoTitle}</h2>
                      <iframe
                        src={geoUrl}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
{/*
                  <div>                    
                      {/* I want to implement here 
                      <div className="weather-section">
                      <h2>Weather Forecast</h2>
                      <div className="date-input-container">
                        <input
                          type="date"
                          id="weather-date"
                          placeholder="Select Date"
                          onChange={handleDateChange}
                        />
                        <button type="button" onClick={fetchWeatherData} className="btn btn-primary">
                          Go
                        </button>
                      </div>
                      <div id="weather-data"></div>
                    </div>
                  </div>


                  {/* ... Weather details information */}

                  <div className="weather-section"> 
                    <h2>Weather Forecast</h2>
                    <div className="date-input-container">
                      <input
                        type="date"
                        id="weather-date"
                        placeholder="Select Date"
                        onChange={handleDateChange}
                        value={selectedDate} // Set initial value
                      />
                      <button type="button" onClick={fetchWeatherData} className="btn btn-primary">
                        Go
                      </button>
                    </div>
                    {weatherData && (
                      <div id="weather-data">
                        {/* Display weather data here */}
                        The weather in {tour.city} on {selectedDate} is {weatherData.weather[0].description} with a temperature of {Math.round((weatherData.main.temp - 273.15) * 10) / 10}°C.
                      </div>
                    )}
                  </div>

                <div>
                  
                  <div className="geo_three">
                      <h2>Intermediate Places Of {city}</h2>
                      <iframe
                        src={direcUrl}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
                </div>

                  <br />
                  <h5>Description</h5>
                  <p>{desc}</p>
                  {/*Tour Review Section start */}
                  <div className="tour_reviews mt-4">
                    <h4>Reviws ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={()=> setTourRating(1)}>
                          1 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=> setTourRating(2)}>
                          2 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=> setTourRating(3)}>
                          3 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=> setTourRating(4)}>
                          4 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=> setTourRating(5)}>
                          5 <i class="ri-star-s-fill"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required/>
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="Img Not Load" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(review.createdAt).toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}<i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/*Tour Review Section end */}
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />  
            </Col>
          </Row>
          }
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
