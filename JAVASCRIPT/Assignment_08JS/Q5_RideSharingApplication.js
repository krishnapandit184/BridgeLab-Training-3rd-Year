// Q5: Ride-Sharing Application (Classes + Inheritance + Error Handling)

// Base class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Rating: ${this.rating}`);
    }
}

// Driver inherits from User and adds vehicle details.
class Driver extends User {
    constructor(name, rating, vehicleName, vehicleNumber) {
        super(name, rating);
        this.vehicleName = vehicleName;
        this.vehicleNumber = vehicleNumber;
    }

    displayDriverDetails() {
        this.displayDetails();
        console.log(`Vehicle: ${this.vehicleName}`);
        console.log(`Vehicle number: ${this.vehicleNumber}`);
    }
}

// Trip stores journey details and calculates its fare.
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        // Validate that distance is provided and is not negative.
        if (this.distance === undefined || this.distance === null ||
            this.distance === "") {
            throw new Error("Trip distance must be provided.");
        }

        if (typeof this.distance !== "number" ||
            !Number.isFinite(this.distance) ||
            this.distance < 0) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }

        // Example fare: Rs. 50 base fare + Rs. 12 per kilometre.
        const baseFare = 50;
        const ratePerKm = 12;

        return baseFare + (this.distance * ratePerKm);
    }
}

// Create a user, a driver, and a trip.
const passenger = new User("Rohan", 4.8);
const driver = new Driver("Sahil", 4.9, "Maruti Swift", "UP 80 AB 1234");

console.log("Passenger details:");
passenger.displayDetails();

console.log("\\nDriver details:");
driver.displayDriverDetails();

// Test a valid trip.
try {
    const trip = new Trip("GLA University", "Mathura Junction", 12);
    console.log("\\nTrip:", trip.fromLocation, "to", trip.toLocation);
    console.log("Distance:", trip.distance, "km");
    console.log("Total fare: Rs.", trip.calculateFare());
} catch (error) {
    console.error("Unable to calculate fare:", error.message);
}

// Test invalid distance to demonstrate error handling.
try {
    const invalidTrip = new Trip("Mathura", "Agra", -5);
    console.log("Total fare: Rs.", invalidTrip.calculateFare());
} catch (error) {
    console.error("Trip error:", error.message);
}

// Fare formula used:
// Total fare = Rs. 50 base fare + (distance in km x Rs. 12).
