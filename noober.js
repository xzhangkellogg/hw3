// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Stores the passenger's dropoff address 
  let dropoffAddress = ride.dropoffLocation.address

  // Stores the passenger's dropoff city 
  let dropoffCity = ride.dropoffLocation.city

  // Stores the passenger's dropoff state
  let dropoffState = ride.dropoffLocation.state

  // Stores the passenger's dropoff zip code  
  let dropoffZip = ride.dropoffLocation.zip

  // Stores the number of passengers
  let numberOfPassengers = ride.numberOfPassengers
  
  // Stores the passenger's first name 
  let firstName = ride.passengerDetails.first

  // Stores the passenger's last name 
  let lastName = ride.passengerDetails.last

  // Stores the passenger's phone number 
  let phoneNumber = ride.passengerDetails.phoneNumber

  // Stores the passenger's pickup address 
  let pickupAddress = ride.pickupLocation.address

  // Stores the passenger's pickup city 
  let pickupCity = ride.pickupLocation.city

  // Stores the passenger's pickup state
  let pickupState = ride.pickupLocation.state

  // Stores the passenger's pickup zip code  
  let pickupZip = ride.pickupLocation.zip

  // Stores whether the passenger's requested Noober Purple  
  let purpleRequested  = ride.purpleRequested
  
  // Stores the level of service based on whether the passenger requested Purple and the number of passengers 
  let levelOfService
  if (purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (numberOfPassengers >3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = `Noober X`
  }
  
  // Display the ride information in the console
  console.log(`${levelOfService} Passenger: ${firstName} ${lastName} - ${phoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState}, ${pickupZip}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState}, ${dropoffZip}. Number of passengers ${numberOfPassengers}`)
  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
