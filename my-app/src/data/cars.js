import bmw from "../assets/images/bmw.png"
import A6 from "../assets/images/A6.jpg"
import mercedes from "../assets/images/mercedes.jpg"
import tesla from "../assets/images/tesla.jpg"
import rover from "../assets/images/rover.jpg"
import lamborghini from "../assets/images/lamborghini.jpg"

export const cars = [
  {
    id: "bmw-5-series",
    name: "BMW 5 Series",
    category: "Luxury Sedan",
    price: 95,
    image: bmw,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: true,
  },
  {
    id: "audi-a6",
    name: "Audi A6",
    category: "Luxury Sedan",
    price: 88,
    image: A6,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: true,
  },
  {
    id: "mercedes-c-class",
    name: "Mercedes C-Class",
    category: "Luxury Sedan",
    price: 92,
    image: mercedes,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: true,
  },
  {
    id: "tesla-model-3",
    name: "Tesla Model 3",
    category: "Electric",
    price: 110,
    image: tesla,
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    available: true,
  },

  {
    id: "rover-defender",
    name: "Rover Defender",
    category: "SUV",
    price: 140,
    image: rover,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    available: true,
  },
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracan",
    category: "Sports Car",
    price: 300,
    image: lamborghini,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 2,
    available: true,
  },
]

export const categories = ["All", ...new Set(cars.map((c) => c.category))]
export const fuels = ["All", ...new Set(cars.map((c) => c.fuel))]

export default cars