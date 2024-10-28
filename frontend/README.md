# NextGen Travel - Frontend

This folder contains the frontend code for the **NextGen Travel** application, built to deliver a seamless user experience for travel planning and booking. The frontend is responsible for user interaction and interfaces, including travel buddy matching, destination previews, weather forecasts, and more.

## Project Structure

The frontend code is organized into the following main folders:

- **components/**: Contains reusable components for the UI, such as buttons, forms, and navigation.
- **pages/**: Defines the main pages and views (e.g., Home, Destination Details, Search Results).
- **assets/**: Stores static files such as images, icons, and CSS styles.
- **services/**: Contains API service functions to interact with the backend.
- **utils/**: Utility functions to handle date formatting, input validation, and other helper tasks.

## Features

The NextGen Travel frontend offers the following core features:

1. **Travel Buddy Matching**: Allows users to find travel companions based on tour dates and plans.
2. **360-Degree Destination View**: Provides an immersive, virtual preview of travel destinations.
3. **Weather Forecast**: Displays real-time weather information for selected travel dates.
4. **Tour Reviews and Ratings**: Allows users to submit reviews and rate their travel experiences.
5. **Search Functionality**: Enables users to search for tours by state, distance, and group size.
6. **User Profile Management**: Allows users to update personal information and view past bookings.

## Getting Started

To run the frontend locally, follow these steps:

### Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tru-technoid/NextGen-Travel.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the frontend in development mode, use:
```bash
npm start
```
The application should be running at `http://localhost:3000`.

### Building for Production

To create an optimized build for production, run:
```bash
npm run build
```
This will generate a `build` folder with all production-ready assets.

## Configuration

- **API Endpoint**: Update the `apiConfig.js` file in the `services` folder to configure the base URL of the backend API.

## Testing

To run frontend tests:
```bash
npm test
```

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for API requests.
- **CSS/SCSS**: Styles for layout and design.
- **Jest**: Testing framework for JavaScript.

## Contributing

1. Fork the project.
2. Create a new branch (`feature/YourFeature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

### Contact

For any questions or support, please contact us at [trusharpatel605@gmail.com](mailto:trusharpatel605@gmail.com).
