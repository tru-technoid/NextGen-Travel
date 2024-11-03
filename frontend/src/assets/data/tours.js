import tourImg1 from "../images/tour-img1.jpg";
import tourImg2 from "../images/tour-img2.jpg";
import tourImg3 from "../images/tour-img3.jpg";
import tourImg4 from "../images/tour-img4.jpg";
import tourImg5 from "../images/tour-img5.jpg";
import tourImg6 from "../images/tour-img6.jpg";
import tourImg7 from "../images/tour-img7.jpg";
import tourImg8 from "../images/tour-img8.jpg";
//import tourImg9 from "../images/tour-img9.jpeg";

const tours = [
  {
    id: "01",
    title: "Varanasi,Uttar Pradesh",
    city: "Varanasi",
    distance: 300,
    price: 4999,
    address:'Sommewhere',
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg1,
    featured: true,
    geo_title:"HarishChandra Ghat",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727099775410!6m8!1m7!1sCAoSLEFGMVFpcE1raFFpNWlOMWRGQVU0YjA1SmlvWjBOS2w2WDFHSmJFV1BqNUtm!2m2!1d25.298937!2d83.0071413!3f105.39005720338615!4f8.413620091548381!5f0.7820865974627469",
  },
  {
    id: "02",
    title: "Ramoji Film City, Telangana",
    city: "Hyderabad",
    distance: 400,
    price: 5699,
    address:'Sommewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg2,
    featured: true,
    geo_title:"Ramoji Film City",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727105498526!6m8!1m7!1snSte1Q2OPMHLSgzYPyp0bg!2m2!1d17.25342944136167!2d78.67669050873417!3f265.6054267158619!4f0.4567639351283077!5f0.7820865974627469",
  },
  {
    id: "03",
    title: "Queen of the Nilgiris, Tamilnadu",
    city: "Ooty",
    distance: 500,
    price: 3399,
    address:'Sommewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg3,
    featured: true,
    geo_title:"Nilgiris Hills",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727105817701!6m8!1m7!1sljIdrSzC3k3WGbGoGoUquA!2m2!1d11.41357458531386!2d76.72500420869657!3f75.0517386614876!4f5.1791362363899225!5f0.7820865974627469",
  },
  {
    id: "04",
    title: "The Scotland of India, Karnataka",
    city: "Coorg",
    distance: 500,
    price: 2899,
    address:'Sommewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg4,
    featured: true,
    geo_title:"Surlabbi Waterfalls, Karnataka",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727106412097!6m8!1m7!1snje9B2lq1Erp83JQfviK4w!2m2!1d12.57352438375606!2d75.74783326714223!3f99.86655966186862!4f15.513279560980337!5f0.7820865974627469",
  },
  {
    id: "05",
    title: "Taj Mahal, Uttar Pradesh",
    city: "Agra",
    distance: 500,
    price: 3999,
    address:'Sommewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg5,
    featured: false,
    geo_title:"Taj Mahal",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727106635224!6m8!1m7!1sCAoSLEFGMVFpcE9OaTZ5LWVSVXR1TnBpTTQ3NXNta1ZMSzhXOHpaT1N3RlYwNWst!2m2!1d27.1751448!2d78.0421422!3f171.71896779708402!4f36.376212264919786!5f0.7820865974627469",
  },
  {
    id: "06",
    title: "Aadaman and Nicobar",
    city: "Neil",
    distance: 500,
    price: 5699,
    address:'Sommewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg6,
    featured: false,
    geo_title:"Bharatpur Beach, Neil Island",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727107282808!6m8!1m7!1sCAoSLEFGMVFpcE4tVHo4dlVPenFkZFN2b1ozRzhMLXpaTDVnWjNBRkhaZ2NWNVBS!2m2!1d11.8359466!2d93.03429539999999!3f298.2194342582952!4f-21.2746192343522!5f0.7820865974627469",
  },
  {
    id: "07",
    title: "Gangtok, Sikkim",
    city: "Gangtok",
    distance: 500,
    price: 6699,
    address:'Sommewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg7,
    featured: false,
    geo_title:"Sikkim Himalayan Zoological Park",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727106837024!6m8!1m7!1sCAoSLEFGMVFpcFBOaW9JZ09UeW5jTXdqNmlIdFZlNUVmR0E0RVYtQTQ0alZ5WkZH!2m2!1d27.3419295!2d88.6212698!3f242.76469874839586!4f-2.247732724525548!5f0.7820865974627469",
  },
  {
    id: "08",
    title: "Dwarka, Gujarat",
    city: "Dwarka",
    distance: 500,
    price: 7399,
    address:'Sommewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg8,
    featured: false,
    geo_title:"Shree Dwarkadhish Temple",
    geo_url:"https://www.google.com/maps/embed?pb=!4v1727106954934!6m8!1m7!1sCAoSKkFGMVFpcFBRaE9qZHYxN3NnenlDNWRwUW8xemI2WnFRbm53blZ2Y3RmQQ..!2m2!1d22.2376336!2d68.96740559999999!3f212.82617930602152!4f-4.137967460138839!5f0.7820865974627469",
  },

];

export default tours;

/*{
     "title": "Varanasi,Uttar Pradesh",
      "city": "Varanasi",
      "distance": 300,
      "price": 99,
      "maxGroupSize": 10,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img01.jpg",
      "featured": true
}
*/