const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;  // Ensure you have the correct API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        console.log('Requesting URL:', url);  
        const response = await axios.get(url);
        console.log('Response status:', response.data.status);

        if (response.data.status === 'OK') {
            if (response.data.results.length > 0) {
                const location = response.data.results[0].geometry.location;
                console.log('Coordinates:', location);
                return {
                    lat: location.lat, 
                    lng: location.lng
                };
            } else {
                throw new Error('No results found for the given address.');
            }
        } else {
            console.error('Geocoding API Error:', response.data.status);
            throw new Error(`Unable to fetch coordinates: ${response.data.status}`);
        }
    } catch (err) {
        console.error('Error fetching coordinates:', err.message);
        throw err;  // Rethrow the error to be handled further up
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and Destination both are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        
        // Check if the API request was successful
        if (response.data.status === 'OK') {
            // Check if rows and elements are present in the response
            if (response.data.rows && response.data.rows.length > 0 &&
                response.data.rows[0].elements && response.data.rows[0].elements.length > 0) {

                const element = response.data.rows[0].elements[0];

                // Check if the status of the element is OK
                if (element.status === 'OK') {
                    return {
                        distance: element.distance,
                        duration: element.duration
                    };
                } else {
                    throw new Error(`Error in distance element: ${element.status}`);
                }

            } else {
                throw new Error('No valid routes found');
            }
        } else {
            // If the API request status is not OK, throw an error
            console.error('API Error:', response.data.status);
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error('Error fetching distance and time:', err.message);
        throw err;  // Rethrow the error for the caller to handle
    }
};

module.exports.getAutoCompleteSuggestions=async(input)=>{
    if(!input){
        throw new Error('query is required');
    }

    const apiKey=process.env.GOOGLE_MAPS_API;
    const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`
    try{
        const response=await axios.get(url);
        console.log(response.data.status);
        if(response.data.status=='OK'){
            return response.data.predictions;
        }
        else
        {
            throw new Error('Unable to fetch suggestions');
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}