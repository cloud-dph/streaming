const users = [
  {
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "9784669444701",
    otp: ["123456", "234567", "345678", "456789", "567890", "678901", "789012", "890123", "901234", "012345"]
  },
  {
    fullName: "Jane Smith",
    email: "janesmith@example.com",
    phone: "800581144475",
    otp: ["654321", "765432", "876543", "987654", "098765", "109876", "210987", "321098", "432109", "543210"]
  },
  {
    fullName: "Alice Johnson",
    email: "alicejohnson@example.com",
    phone: "8949972344",
    otp: ["111111", "222222", "333333", "444444", "555555", "666666", "777777", "888888", "999999", "000000"]
  }
];

// Exporting users array if using a module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = users;
}
