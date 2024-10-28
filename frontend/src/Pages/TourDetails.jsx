import React,{useRef,useState,useEffect} from "react";
import "../Styles/tour-details.css";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "./../Utils/AvgRating";
import avatar from "../assets/images/avatar.png";
import Booking from "../Components/Booking/Booking";
import 'remixicon/fonts/remixicon.css';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating]=useState(null);

  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  //This Is static data later we will call our API and load our dtabase
  const tour = tourData.find((tour) => tour.id === id);

  //submit request to server
  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    //For Check   alert(`${reviewText},${tourRating}`)

    //later call api
  }

      // Fetch weather data on component mount (optional)
      useEffect(() => {
        const fetchInitialWeather = async () => {
          const apiKey = "149a477cdf88f1a01b95c7e2921344ef"; // Replace with your API key
          const location = tour.city;
          const today = new Date().toISOString().split('T')[0]; // Get today's date

          const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&dt=${today}`;

          try {
            const response = await fetch(url);
            const weatherData = await response.json();
            setWeatherData(weatherData);
            setSelectedDate(today); // Set initial selected date to today
          } catch (error) {
            console.error("Error fetching initial weather data:", error);
          }
        };

        fetchInitialWeather();
      }, []); // Empty dependency array to run only once on mount

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const fetchWeatherData = async () => {
    if (!selectedDate) {
      alert("Please select a date!");
      return;
    }

    const apiKey = "YOUR_WEATHER_DATA_KEY"; // Replace with your API key
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
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
    geo_title,
    geo_url
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <>
      <section>
        <Container>
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
                      <i class="ri-money-dollar-circle-line"></i>
                      {price} / per person
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
                  <br />
                  <div className="geo_three">
                      <h2>3D View Of {geo_title}</h2>
                      <iframe
                        src={geo_url}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
                 
                  {/* ... Tour details information */}

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

                  {/* ... Tour reviews */}
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
                                <h5>CHeck</h5>
                                <p>
                                  {new Date("01-18-2023").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5<i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>Amazing tour</h6>
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
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
