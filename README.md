# NASA Space Explorer

NASA Space Explorer is an interactive web application that provides users with access to NASA's Astronomy Picture of the Day (APOD), Mars Rover Photos, and Mars Weather data. Leveraging NASA's API, it offers a visually engaging and informative experience for space enthusiasts.

## UX

### Target Audience
- **Space Enthusiasts**: Individuals curious about astronomy, Mars exploration, and the latest NASA missions.
- **Students and Educators**: Those seeking reliable data and images for educational purposes.

### Goals
- **Discover APOD**: Users can view NASA’s Astronomy Picture of the Day with detailed explanations.
- **Explore Mars**: Users can browse Mars Rover photos captured on specific dates.
- **Stay Updated**: Users can view the latest Mars weather data from NASA's InSight mission.

### User Stories
1. **As a space enthusiast**, I want to view NASA’s Astronomy Picture of the Day so that I can learn more about space.
2. **As a student**, I want to explore Mars Rover images for a specific date to use in my research.

### Design Process
- **Wireframes and Mockups**: Basic layouts and color themes were designed for usability and readability.
- **Responsive Design**: Ensures compatibility with various devices and screen sizes.

## Features

### Existing Features
1. **Astronomy Picture of the Day (APOD)**:  
   - Allows users to select a date and fetch the corresponding NASA picture and description.
   - Integrated with NASA's APOD API.

2. **Mars Rover Photos**:  
   - Lets users select a date to view photos taken by Mars rovers.
   - Displays photo metadata, including the rover's name and camera details.

3. **Mars Weather Report**:  
   - Fetches and displays the latest weather data from NASA's InSight mission, including temperature, pressure, and wind speed.

4. **Contact Links**:  
   - "About Me" and "Contact Me" links enable users to connect with the developer or learn more about the project.

### Features Left to Implement
1. **Search by Rover Name**: Enable users to filter photos by specific Mars rovers.
2. **Date Range Selection**: Allow users to select a date range for APOD and Mars Rover photos.

## Technologies Used

1. **HTML5**: For structuring the website.  
2. **CSS3**: For styling and responsive design.  
3. **JavaScript (ES6)**: For DOM manipulation and API integration.  
4. **[Axios](https://axios-http.com/)**: Used for making HTTP requests to NASA's APIs.  
5. **NASA APIs**:  
   - [APOD API](https://api.nasa.gov/#apod) for fetching the Astronomy Picture of the Day.  
   - [Mars Rover Photos API](https://api.nasa.gov/#mars-photos) for rover images.  
   - [InSight Mars Weather API](https://api.nasa.gov/#insight_weather) for weather data.

## Testing

### Manual Testing
1. **APOD Feature**:  
   - Verified image and description fetch successfully for various valid dates.  
   - Checked for appropriate error handling when no date is selected or an invalid date is provided.

2. **Mars Rover Photos**:  
   - Ensured photos load correctly for valid dates.  
   - Verified error message for dates with no photos.

3. **Mars Weather**:  
   - Confirmed latest weather data is displayed accurately.  
   - Tested fallback for missing weather data.

4. **Cross-Browser Compatibility**:  
   - Tested on Chrome, Firefox, Safari, and Edge for consistent UI and functionality.

5. **Responsive Design**:  
   - Verified layout adjusts seamlessly across mobile, tablet, and desktop devices.

### Bugs Identified
- **APOD Invalid Date**: Error handling occasionally misfires for dates beyond the available range.  
- **Mars Weather API**: Inconsistent data availability causes occasional blank outputs.

## Deployment

### Hosting
The project is deployed on GitHub Pages for easy access.  
- **URL**: [NASA Space Explorer](https://your-github-repo-link)

### Deployment Steps
1. Uploaded all project files to GitHub repository.  
2. Enabled GitHub Pages in repository settings.  
3. Verified site functionality on deployment.

### Running Locally
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/nasa-space-explorer.git
   ```
2. Open the project folder and run the `index.html` file in a browser.

## Credits

### Content
- NASA's APIs provide all image, text, and weather data.

### Media
- Background image sourced from [Unsplash](https://unsplash.com).

### Acknowledgements
- Inspiration from NASA's API documentation and various educational astronomy resources.
