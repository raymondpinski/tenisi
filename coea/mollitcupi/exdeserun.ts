// Define an interface representing the structure of Riyad
interface Person {
  getOccupation: () => string;
}

// Create an object Riyad that conforms to the Person interface
const Riyad: Person = {
  getOccupation: () => {
    // Assuming the occupation is known and static
    return "Software Developer";
  }
};

// Log the occupation of Riyad to the console
console.log(Riyad.getOccupation());
