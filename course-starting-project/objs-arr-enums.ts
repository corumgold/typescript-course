// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
  userType: Role;
} = {
  name: "Cory",
  age: 27,
  hobbies: ["Guitar", "Coding", "Mountain Biking", "Pickle Ball"],
  role: [2, "engineer"],
  userType: Role.ADMIN,
};

let randomValueArray: any[];
randomValueArray = ["string", 1, true];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(`hobby number ${person.hobbies.indexOf(hobby) + 1}: ${hobby}`);
  // console.log(hobby.map()) // !!! ERROR !!!
}

// person.role[1] = 10 // !!! ERROR !!!

if (person.userType === Role.ADMIN) {
  console.log("is admin");
} else if (person.userType === Role.READ_ONLY) {
  console.log("is read only");
} else {
  console.log("is author");
}
