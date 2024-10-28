const calculateAvgRating = (reviews) => {
    // Check if reviews array is empty or undefined
    if (!reviews || reviews.length === 0) {
      return { totalRating: 0, avgRating: 'No Reviews' };
    }
  
    const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);
  
    return { totalRating, avgRating };
  };
  
export default calculateAvgRating;

/*
const calculateAvgRating = reviews =>{

    const totalRating = reviews?.reduce((acc,item)=> acc + item.rating, 0);
    const avgRating = 
    totalRating === 0 
    ? "" 
    : totalRating === 1
    ? totalRating 
    : (totalRating / reviews?.lenght).toFixed(1);

    return{
        totalRating,
        avgRating,
    }
}

export default calculateAvgRating;*/