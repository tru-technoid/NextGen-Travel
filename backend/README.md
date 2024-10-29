# NextGen Travel - Backend

This folder contains the backend code for the **NextGen Travel** application, which manages data processing, user authentication, and serves API endpoints for the frontend. The backend is responsible for handling tour data, travel buddy matching, reviews, weather forecasts, and other essential services.

## Project Structure

The backend code is organized into the following main folders:

- **controllers/**: Contains logic for handling API requests and sending responses.
- **models/**: Defines data models and schemas (e.g., User, Tour, Review).
- **routes/**: Configures API routes that link endpoints with their respective controllers.
- **middleware/**: Contains middleware for authentication, error handling, and input validation.
- **config/**: Holds configuration files for database connections and environment variables.
- **utils/**: Utility functions, including data formatting and helper functions.

## Features

The NextGen Travel backend provides the following key functionalities:

1. **User Authentication & Authorization**: Secure login and registration, with protected endpoints.
2. **Travel Buddy Matching**: Matches users seeking travel companions based on tour schedules.
3. **360-Degree Destination View**: Serves destination data for the frontend’s virtual previews.
4. **Weather Forecast Integration**: Connects to third-party APIs to deliver weather data.
5. **Tour Review Submission**: Allows users to submit, edit, and retrieve tour reviews.
6. **Search Functionality**: Processes search requests by state, distance, and group size, and returns relevant tours.

## Getting Started

### Prerequisites

- **Node.js** and **npm**: Ensure Node.js is installed. [Download here](https://nodejs.org/).
- **MongoDB**: Install MongoDB locally or set up a remote instance for data storage.
- **Express.js**: Web framework for Node.js used to handle HTTP requests. Install using:
  ```bash
  npm install express
  ```
- **Nodemon**: Development tool to automatically restart the server upon code changes. Install globally with:
  ```bash
  npm install -g nodemon
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tru-technoid/NextGen-Travel.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. **Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     PORT=4000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     WEATHER_API_KEY=your_weather_api_key
     ```
2. **API Key Configuration**:
   - Replace `your_weather_api_key` with an API key from a weather data provider for real-time forecasts.

### Running the Server

To start the backend server in development mode, use:
```bash
npm run start-dev
```
The server should be running at `http://localhost:4000`.

### Production Build

To run the server in production, use:
```bash
npm start
```

## API Documentation

The following is an overview of the primary API endpoints:

- **User**:
  - `POST /api/users/register`: Register a new user.
  - `POST /api/users/login`: User login.
- **Tours**:
  - `GET /api/tours/search`: Search for tours by state, distance, and group size.
  - `POST /api/tours/review`: Submit a review for a tour.
- **Travel Buddy**:
  - `POST /api/travelbuddy/match`: Match users with similar tour plans.

Detailed API documentation is provided in the [API Docs](docs/api-docs.md) file.

## Testing

To run backend tests:
```bash
npm test
```

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: Database for storing user and tour data.
- **Mongoose**: ODM for MongoDB, managing data schemas and models.
- **JWT**: Authentication through JSON Web Tokens.
- **Axios**: For making external API requests (e.g., weather data).

## Contributing

1. Fork the repository.
2. Create a new branch (`feature/YourFeature`).
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

### Contact

For any questions or support, reach out at [trushadowspecter261@gmail.com](mailto:trushadowspecter261@gmail.com).
```

This `README.md` file provides setup instructions, key features, project structure, configuration steps, API endpoints, and other essential information specific to the backend. Let me know if you need any further customization!
