use bookings;

db.dropDatabase();

db.hotel_bookings.insertMany(
    [
    {
        name: "John Smith",
        email: "jsmith1@gmail.com",
        status: "not checked in"
    },
    {
        name: "Mary Jones",
        email: "mj@gmail.com",
        status: "not checked in"
    },
    {
        name: "Peter Parker",
        email: "pp@gmail.com",
        status: "not checked in"
    }
]);