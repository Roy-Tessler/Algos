// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixData from "wix-data";
import wixUsers from "wix-users";
import wixLocation from "wix-location";
import wixWindow from "wix-window";

// export function loginButton_click(event) {

// 	let email = $w("#email").value;
// 	let password = $w("#password").value;

// 	wixUsers.login(email, password)
// 		.then(() => {
// 			console.log("User is logged in");
// 			wixLocation.to("/account/my-account"); //Change the URL ending to whatever page you want to send the user to after they log in.
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			//  $w("#errorMessage").expand();  // You can delete this line if you are not going to add an error message.  Use a regular text element set to 'collapse on load' from the Properties Panel.
// 		});
// }

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
  $w("#messagesWrite").onAfterSave(async () => {
    let data = await getData();
    let user = wixUsers.currentUser;
    let userId = user.id; // "r5cme-6fem-485j-djre-4844c49"
    let isLoggedIn = user.loggedIn; // true
    let email = await user.getEmail();
    data.map(msg => {
      console.log("mssss", msg);
      $w("#messageBody").text = msg.messages;
      $w("#userEmail").text = email;
      $w("#datePosted").text = msg._createdDate.toLocaleString();
    });
  });
  // getData().then((items) => {
  // 	$w("#messagesList").data = items
  // 	let user = wixUsers.currentUser;
  // 	let userId = user.id; // "r5cme-6fem-485j-djre-4844c49"
  // 	let isLoggedIn = user.loggedIn; // true
});

// $w.onReady(function () {
//  $w("#forgotPassword").onClick( (event) => {
//     //wixWindow.lightbox.close()
//    wixUsers.promptForgotPassword()
//    .then( ( ) => {
//    //
//    } )
//     .catch( (err) => {
//     let errorMsg = err;  //"The user closed the forgot password dialog"
//     });
//  });
// });
