import React from 'react';
import './booking-container.styles.scss'


export default function BookingContainer() {


    return (
        <div className='bookingcontainer'>
            <div class="fh5co-hero">
                <div class="fh5co-overlay"></div>
                <div class="fh5co-cover" data-stellar-background-ratio="0.5">
                    <div class="desc">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-5 col-md-5">
                                    <div class="tabulation animate-box">


                                        <ul class="nav nav-tabs" role="tablist">
                                            <li role="presentation" class="active">
                                                <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">City-Taxi</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">Outstation</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#packages" aria-controls="packages" role="tab" data-toggle="tab">Rentals</a>
                                            </li>
                                        </ul>


                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane active" id="flights">
                                                <div class="row">
                                                    <div class="col-sm-12 mt">
                                                        <div class="input-field">
                                                            <label for="from">Pickup:</label>
                                                            <input type="text" class="form-control" id="from-place" placeholder="Vijay Nagar, Indore" />
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 mt">
                                                        <div class="input-field">
                                                            <label for="from">Destination:</label>
                                                            <input type="text" class="form-control" id="to-place" placeholder="C21, A.B Road, Indore" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label for="date-start">Book-Time:</label>
                                                            <input type="text" class="form-control" id="date-start" placeholder="mm/dd/yyyy" />
                                                        </div>
                                                    </div>
                            
                                                    <div class="col-xs-12">
                                                        <input type="submit" class="btn btn-primary btn-block" value="Search Rides" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div role="tabpanel" class="tab-pane" id="hotels">
                                                <div class="row">
                                                    <div class="col-xxs-12 col-xs-12 mt">
                                                        <div class="input-field">
                                                            <label for="from">Pickup location:</label>
                                                            <input type="text" class="form-control" id="from-place" placeholder="Indore, Madhya Pradesh" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-12 mt">
                                                        <div class="input-field">
                                                            <label for="from">Drop location:</label>
                                                            <input type="text" class="form-control" id="from-place" placeholder="Bhopal, Madhya Pradesh" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label for="date-end">Book Now or Later:</label>
                                                            <input type="text" class="form-control" id="date-end" placeholder="mm/dd/yyyy" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <input type="submit" class="btn btn-primary btn-block" value="Book Ride" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div role="tabpanel" class="tab-pane" id="packages">
                                                <div class="row">
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <div class="input-field">
                                                            <label for="from">City:</label>
                                                            <input type="text" class="form-control" id="from-place" placeholder="Los Angeles, USA" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <div class="input-field">
                                                            <label for="from">Destination:</label>
                                                            <input type="text" class="form-control" id="to-place" placeholder="Tokyo, Japan" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label for="date-start">Departs:</label>
                                                            <input type="text" class="form-control" id="date-start" placeholder="mm/dd/yyyy" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label for="date-end">Return:</label>
                                                            <input type="text" class="form-control" id="date-end" placeholder="mm/dd/yyyy" />
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 mt">
                                                        <section>
                                                            <label for="class">Ride-Type:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>Choose ride type...</option>
                                                                <option value="economy">Mini car</option>
                                                                <option value="first">Sedan</option>
                                                                <option value="business">Travellor</option>
                                                                <option value="business">Jeep</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <input type="submit" class="btn btn-primary btn-block" value="Book Ride plan" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="desc2 animate-box">
                                    <div class="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
                                        <p>Book a City Taxi to your destination in town</p>
                                        <h2>Smooth Ride, Safety Ride, The Fastest ride...</h2>
                                        <h3>Choose from a range of categories and prices</h3>
                                        <span class="price">30% off</span>
                                        <p><a class="btn btn-primary btn-lg" >Get Started</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}