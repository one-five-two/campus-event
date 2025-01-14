# Campus Event Hub

## Project Overview
Campus Event Hub is a dynamic web platform designed to streamline event management and discovery within campus communities. Students and organizations can create, discover, and participate in various campus events, fostering a more connected and engaged university experience.

Key functionalities include event creation, registration, search capabilities, and real-time notifications, making it easier for the campus community to stay informed and involved.

---

## Deployment Links
- Frontend: [Sharon's Campus Event Hub]https://campus-event-zg73.vercel.app/
- Backend API: [API Endpoint](https://campus-event-hub-api.onrender.com)

---

## Login Details
Test the application using these credentials:

**Admin Account:**
- Email: admin@campusevents.com
- Password: admin123

**User Account:**
- Email: user@campusevents.com
- Password: user123

---

## Feature Checklist
### User Management
- [x] User Registration
- [x] User Authentication
- [x] Profile Management
- [x] Role-based Access Control

### Event Management
- [x] Event Creation
- [x] Event Editing
- [x] Event Deletion
- [x] Event Search & Filtering
- [x] Category Management

### Interactive Features
- [x] Event Registration/RSVP
- [x] Real-time Notifications
- [x] Comments & Feedback
- [x] Event Calendar View

### Administrative Features
- [x] User Management Dashboard
- [x] Event Approval System
- [x] Analytics & Reports
- [x] Content Moderation

---

## Installation Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/campus-event-hub.git
   cd campus-event-hub
   ```

2. **Install Dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # In backend directory
   cp .env.example .env
   # Configure your environment variables
   ```

4. **Start Development Servers**
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd frontend
   npm start
   ```

5. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

---

## API Documentation

### Authentication Endpoints
![Auth Endpoints](path/to/auth-endpoints-screenshot.png)

### Event Endpoints
![Event Endpoints](path/to/event-endpoints-screenshot.png)

### User Endpoints
![User Endpoints](path/to/user-endpoints-screenshot.png)

---

## Environment Variables
