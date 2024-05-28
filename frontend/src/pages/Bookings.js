import '../styles/Home.css'
import '../styles/Bookings.css'
import React, { useEffect, useState } from 'react';
const Bookings = () => {
    const [carsArray, setCarsArray] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4004/api/allbooks', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const booksData = await response.json();
                    setCarsArray(booksData);
                    console.log('Fetched data:', booksData);
                } else {
                    console.error('Failed to fetch data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };
        fetchData();
    }, []);
    return (
        <> 
        <div classname="fullpage4">
       <nav class="navbar">
        <div class="navbar-container">
            <a href="www.google.com" class="brand-title">Car-Hub</a>
            <input type="checkbox" id="toggle-button" class="toggle-button" />
            <label for="toggle-button" class="toggle-label">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </label>
            <div class="navbar-links">
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Addcar">Add Car</a></li>
                    <li><a href="/Bookcar">Book Car</a></li>
                    <li><a href="/bookings">My Booking</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div className='allcars'>
                {carsArray.map((car) => (
                    <div className="card" key={car._id}>
                        <img src={car.Carimg} alt="Car Image" className="car-image" />
                        <div className="card-details">
                            <p className="car-name">{car.Name}</p>
                            <p className="car-info">Date: {car.Date}</p>
                            <p className="car-info">CheckinTime: {car.CheckinTime}</p>
                            <p className="car-info">Hours Required: {car.Hours}</p>
                            <p className="car-info">Registration No: {car.Regno}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    </> 
    );
};

export default Bookings;
