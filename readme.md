<h1 align="center">YMCA Carpooling Platform</h1>
<h2 align="center">A Web-Based Ride Sharing and Carpool Management System
<br>Developed as a 3rd Semester Academic Project<h2>

<h2>Overview</h2>
<p>
The Carpooling Platform is a web-based ride-sharing application designed to help students and commuters find, offer, and manage shared rides efficiently. The system aims to reduce transportation costs, decrease traffic congestion, promote eco-friendly travel, and provide a convenient transportation solution for daily commuters.

The platform enables users to register as drivers or passengers, search for available rides, offer rides to others, communicate with fellow users, and manage bookings through a user-friendly interface.
</p>

<h2>Objectives</h2>

* Provide an efficient ride-sharing platform for students and commuters.
* Reduce individual transportation costs through shared travel.
* Minimize traffic congestion and carbon emissions.
* Improve accessibility and convenience for daily transportation.
* Create a secure and user-friendly ride booking experience.

<h2>Key Features</h2>
<h3>User Authentication</h3>

* User Registration
* Secure Login System
* Passenger and Driver Profiles
* Session Management
<h3>Ride Management</h3>

* Offer a Ride
* Find Available Rides
* View Ride Details
* Manage Ride Requests
<h3>Driver Module</h3>

* Driver Registration
* Driver Information Management
* Ride Availability Updates
* Passenger Request Handling
<h3>Passenger Module</h3>

* Search Available Rides
* Send Ride Requests
* View Driver Details
* Booking Management
<h3>Communication System</h3>

* Driver-Passenger Messaging
* Ride Coordination Support
* User Interaction Interface
<h3>Payment Interface</h3>

* Payment Gateway Simulation
* Multiple Payment Options
* Transaction Interface
<h3>Dashboard</h3>

* User Dashboard
* Ride History
* Booking Overview
* Request Management
<h2>Technology Stack</h2>
<h3>Frontend</h3>

* HTML5
* CSS3
* JavaScript
<h3>Development Tools</h3>

* Visual Studio Code
* Git
* GitHub
<h3>Deployment</h3>

* Vercel

System Architecture

┌─────────────────────────┐
│         User            │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      Web Interface      │
│  HTML • CSS • JS        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   Authentication Layer  │
│ Login & Registration    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   Ride Management       │
│ Offer / Find Rides      │
└────────────┬────────────┘
             │
      ┌──────┴──────┐
      ▼             ▼
┌──────────┐   ┌──────────┐
│ Driver   │   │Passenger │
│ Module   │   │ Module   │
└────┬─────┘   └────┬─────┘
     │              │
     └──────┬───────┘
            ▼
┌─────────────────────────┐
│ Communication & Booking │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ Payment & Confirmation  │
└─────────────────────────┘

⸻

Project Structure

carpool
│
├── index.html
├── home.html
├── login.html
├── register.html
├── dashboard.html
├── bookings.html
├── find_ride.html
├── offer_ride.html
├── requests.html
├── rider.html
├── traffic.html
├── payments.html
│
├── login_style.css
├── register_style.css
├── payments.css
│
├── login_script.js
├── register_script.js
├── dashboard_script.js
├── payments.js
│
├── images
│   ├── carpool.jpeg
│   ├── driver.jpg
│   ├── passenger.jpg
│   ├── students.jpg
│   └── other assets
│
└── README.md

⸻

Installation

Clone Repository

git clone https://github.com/Tanishttha/carpool.git
cd carpool

Run Locally

Open the project directory and launch:

open index.html

or use:

python3 -m http.server 8000

Then open:

http://localhost:8000

⸻

Modules

Home Module

Provides an introduction to the platform and navigation to major functionalities.

Authentication Module

Handles user registration and login operations.

Driver Module

Allows users to register as drivers and offer rides.

Passenger Module

Enables users to search and request rides.

Booking Module

Manages ride reservations and confirmations.

Payment Module

Provides a simulated payment interface for ride transactions.

Communication Module

Facilitates interaction between drivers and passengers.

⸻

Expected Outcomes

* Reduced transportation expenses.
* Improved ride-sharing efficiency.
* Better utilization of vehicle capacity.
* Environmentally sustainable transportation.
* Enhanced commuter convenience.
<h2>Future Enhancements</h2>

* Real-Time GPS Tracking
* Live Ride Matching
* Mobile Application Development
* Online Payment Gateway Integration
* Rating and Review System
* Emergency Support Features
* AI-Based Ride Recommendations
* Route Optimization Algorithms
<h2>Academic Information</h2>

* Project Type: Capstone Project
* Semester: 3rd Semester
* Course: Computer Engineering
* Technology Used: HTML, CSS, JavaScript
* Institution: J.C. Bose University of Science and Technology, YMCA
<h2>Live Demo</h2>

```bash
https://carpool-ymca.vercel.app
```
<h2>License</h2>
This project was developed for academic and educational purposes.