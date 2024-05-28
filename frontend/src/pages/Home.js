import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

const Home = () => {
    const [carsArray, setCarsArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4004/api/allcars', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const carsData = await response.json();
                    setCarsArray(carsData);
                    console.log('Fetched data:', carsData);
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
        <div className='fullpage1'>
            <nav className="navbar">
                <div className="navbar-container">
                    
                    <a href="http://www.google.com" className="brand-title">Car-Hub</a>
                    <input type="checkbox" id="toggle-button" className="toggle-button" />
                    <label htmlFor="toggle-button" className="toggle-label">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </label>
                    <div className="navbar-links">
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
                            <p className="car-info">Year: {car.Year}</p>
                            <p className="car-info">Color: {car.Color}</p>
                            <p className="car-info">Rate: {car.Rate}</p>
                            <p className="car-info">Registration No: {car.Regno}</p>
                            
                        </div>
                        
                    </div>
                ))}
            </div>
            </div>
        </> 
    );
};

export default Home;
