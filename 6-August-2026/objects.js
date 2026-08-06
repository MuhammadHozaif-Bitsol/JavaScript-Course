let airbnb = {
  name: "abcd",
  price: 1234,
  isAvailable: true,
  amenities: ["wi-fi", "free breakfast"],
};
console.log(airbnb.name);
console.log(airbnb.amenities[0]);
//person object
let person = {
  name: "hozaif",
  age: "24",
  country: "Pakistan",
  logData: function () {
    console.log(
      person.name +
        " is " +
        person.age +
        " " +
        "years old and lives in " +
        person.country,
    );
  },
};
person.logData();
