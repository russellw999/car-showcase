import { CarProps, FilterProps } from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars() {


  //const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=Volkswagen';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '21a783b765msh502ff487a7bcceap1943f9jsnf17e5042d2f8',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };
  
    // we did not install axios
	//const response = await axios.request(options);
  // test a call
  //  const response = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'

  try {
    const response = await fetch(url, options);
   // Parse the response as JSON
   const result = await response.json();
 //   console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }

}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  //   const url = new URL("https://cdn.imagin.studio/car-image-app");

  const { make, model, year } = car;

  //url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
