let arr = ["Gaurav", "Sourav", "Mithun", "Komal"];
function isUserPresent(user) {
  if (arr.includes(user)) {
    console.log(`Yes ${user} is a valid user`);
  } else {
    console.log(`No ${user} is not a valid user`);
  }
}
isUserPresent("Gaurav");
isUserPresent("Hello");
