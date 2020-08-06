// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixData from "wix-data";
import wixUsers from "wix-users";

function getData() {
  let query = wixData.query("Messages");

  return query
    .limit(1000)
    .find()
    .then(result => {
      console.log("getData", result);
      return result.items;
    });
}
$w.onReady(() => {
  $w("#messagesWrite").onAfterSave(() => {
    getData().then(items => {
      $w("#messagesList").data = items;
    });
  });
});

let user = wixUsers.currentUser;
let userId = user.id; // "r5cme-6fem-485j-djre-4844c49"
let isLoggedIn = user.loggedIn; // true
user.getEmail().then(email => {
  let userEmail = email; // "user@something.com"
});

let email = $w("#email").value;
let password = $w("#password").value;
wixUsers
  .login(email, password)
  .then(() => {
    console.log("User is logged in");
  })
  .catch(err => {
    console.log(err);
  });
