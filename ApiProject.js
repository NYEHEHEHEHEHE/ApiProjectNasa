const apiKey = 'NX8Stg7B7TYBrv88bcC6VXhveElfXjKt5fBjX9CR'; // Replace this with your NASA API key

// Fetch APOD with Axios
async function fetchAPOD(date = ''){
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    console.log('APOD Request URL:', url); // Debugging: Log the request URL

    try {
        const response = await axios.get(url);
        console.log('APOD Response:', response.data); // Debugging: Log the API response
        displayAPOD(response.data);
    } catch (error) {
        console.error('Error fetching the APOD data:', error);
        alert('Error fetching APOD data. Please try again later.');
    }
}

// Display APOD data
function displayAPOD(data){
    const apodImg = document.getElementById('apod-img');
    const apodDescription = document.getElementById('apod-description');

    if (data.url) {
        apodImg.src = data.url;
        apodImg.alt = data.title;
        apodDescription.textContent = data.explanation;
    } else {
        apodDescription.textContent = 'No image available for the selected date.';
    }
}

// Event listener for APOD button
document.getElementById('fetch-apod').addEventListener('click', () =>{
    const selectedDate = document.getElementById('apod-date').value;
    if (selectedDate) {
        fetchAPOD(selectedDate);
    } else {
        alert('Please select a date for the APOD.');
    }
});

// Fetch Mars Rover Photos with Axios (using earth_date as a parameter)
async function fetchMarsRoverPhotos(date = ''){
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`;
    console.log('Mars Rover Request URL:', url); // Debugging: Log the request URL

    try {
        const response = await axios.get(url);
        console.log('Mars Rover Response:', response.data); // Debugging: Log the API response
        if (response.data.photos.length === 0) {
            displayNoMarsPhotos(); // No photos available
        } else {
            displayMarsPhotos(response.data.photos);
        }
    } catch (error) {
        console.error('Error fetching the Mars rover photos:', error);
        alert('Error fetching Mars Rover photos. Please try again later.');
    }
}

// Display Mars Rover Photos
function displayMarsPhotos(photos){
    const marsContainer = document.getElementById('mars-container');
    marsContainer.innerHTML = ''; // Clear the container

    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.img_src;
        img.alt = `Mars Rover Photo ${photo.id}`;
        img.className = 'mars-img';
        marsContainer.appendChild(img);
    });
}

// Handle no photos available case
function displayNoMarsPhotos(){
    const marsContainer = document.getElementById('mars-container');
    marsContainer.innerHTML = '<p>No photos found for the selected date.</p>';
}

// Event listener for Mars Rover button
document.getElementById('fetch-mars').addEventListener('click', () =>{
    const selectedDate = document.getElementById('mars-date').value;
    if (selectedDate) {
        fetchMarsRoverPhotos(selectedDate);
    } else {
        alert('Please select a date for the Mars Rover photos.');
    }
});

// Set max date for APOD and Mars Rover date inputs
document.addEventListener('DOMContentLoaded', () =>{
    const today = new Date().toISOString().split('T')[0];// Get today's date in the format YYYY-MM-DD
    document.getElementById('apod-date').setAttribute('max', today);
    document.getElementById('mars-date').setAttribute('max', today);
});

// Get the rover's name and     
function displayMarsPhotos(photos) {
    const marsContainer = document.getElementById('mars-container');
    marsContainer.innerHTML = ''; // Clear the container

    photos.forEach(photo => {
        const photoContainer = document.createElement('div');
        photoContainer.className = 'photo-container'; // Optional: Add styling for each photo

        const img = document.createElement('img');
        img.src = photo.img_src;
        img.alt = `Mars Rover Photo ${photo.id}`;
        img.className = 'mars-img';

        const caption = document.createElement('p');
        caption.textContent = `Captured by ${photo.rover.name} using the ${photo.camera.full_name} on ${photo.earth_date}`;

        photoContainer.appendChild(img);
        photoContainer.appendChild(caption);
        marsContainer.appendChild(photoContainer);
    });
}


// Fetch Mars Weather Data
async function fetchMarsWeather() {
    const url = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;
    console.log('Mars Weather Request URL:', url); // Debugging: Log the request URL

    try {
        const response = await axios.get(url);
        console.log('Mars Weather Response:', response.data); // Debugging: Log the API response
        displayMarsWeather(response.data);
    } catch (error) {
        console.error('Error fetching Mars Weather data:', error);
        alert('Error fetching Mars Weather data. Please try again later.');
    }
}

// Display Mars Weather Data
function displayMarsWeather(data) {
    const marsWeatherContainer = document.getElementById('mars-weather-container');
    marsWeatherContainer.innerHTML = ''; // Clear the container

    // Get the latest sol (Martian day) data
    const solKeys = data.sol_keys; // Array of sol keys
    if (solKeys.length === 0) {
        marsWeatherContainer.innerHTML = '<p>No weather data available.</p>';
        return;
    }

    const latestSol = solKeys[solKeys.length - 1];
    const weather = data[latestSol]; // Get weather data for the latest sol

    const { AT, PRE, HWS } = weather; // Atmospheric Temperature, Pressure, and Wind Speed

    const weatherHTML = `
        <p><strong>Sol (Martian Day):</strong> ${latestSol}</p>
        <p><strong>Temperature:</strong> High: ${AT?.mx || 'N/A'}°C, Low: ${AT?.mn || 'N/A'}°C</p>
        <p><strong>Pressure:</strong> ${PRE?.av || 'N/A'} Pa</p>
        <p><strong>Wind Speed:</strong> ${HWS?.av || 'N/A'} m/s</p>
    `;
    marsWeatherContainer.innerHTML = weatherHTML;
}

// Event listener for Mars Weather button
document.getElementById('fetch-mars-weather').addEventListener('click', fetchMarsWeather);

