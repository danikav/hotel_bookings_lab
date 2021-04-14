use bookings;

db.dropDatabase();

db.hotel_bookings.insertMany(
    [
    {
        name: "John Smith",
        email: "jsmith1@gmail.com",
        status: true
    },
    {
        name: "Mary Jones",
        email: "mj@gmail.com",
        status: false
    },
    {
        name: "Peter Parker",
        email: "pp@gmail.com",
        status: false
    }
]);