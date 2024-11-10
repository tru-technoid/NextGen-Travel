import { BASE_URL } from '../Utils/config';
import useFetch from './useFetch';

const useBookingFetch = (user) => {
  const url = `${BASE_URL}/booking?email=${user.email}`;
  const { data, error, loading } = useFetch(url);

  return {
    bookings: data,
    error,
    loading,
  };
};

export default useBookingFetch;