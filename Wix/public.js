// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixData from "wix-data";
import wixUsers from "wix-users";
import wixLocation from "wix-location";
import wixWindow from "wix-window";

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
    $w("#messagesList").data = data;
  });
});

// $w.onReady( () => {
//   $w("#picksData").onBeforeSave( () => {
//  let filterWeekNo = $w("#filtersData").getCurrentItem().weekNo;

//  let user = wixUsers.currentUser;
//  let userId = user.id;
//  let isLoggedIn = user.loggedIn;
//         console.log("gotuser");

//     user.getEmail()
//         .then( (email) => {
//  let userEmail = email;
//             $w("#picksData").setFieldValue("userEmail",email);
//             $w("#picksData").save();
//         } );

//     $w("#picksData").setFieldValue("weekNo",filterWeekNo);
//     $w("#picksData").save();
//     console.log("Continuing save");
//   } );

// });

$w.onReady(async function() {
  // let user = wixUsers.currentUser;
  // let userId = user.id; // "r5cme-6fem-485j-djre-4844c49"
  // let isLoggedIn = user.loggedIn; // true
  // let email = await user.getEmail()

  wixData
    .query("Members/PrivateMembersData")
    .eq("_id", wixUsers.currentUser.id)
    .find()
    .then(results => {
      $w("#userEmai").value = results.items[0].loginEmail;
      $w("#messagesWrite").setFieldValue("Email", $w("#userEmai").value);
    });
  // 	$w("#messagesList").onItemReady(($item, itemData, index) => {
  // $item("#messageBody").text = itemData.messages;
  // $item("#datePosted").text = itemData._createdDate.toLocaleString();
  // });
  wixData
    .query("Messages")
    .find()
    .then(results => {
      $w("#messagesList").data = results.items;
    });
});

export async function followButton_click(event) {
  let id = event.context.itemId;
  let messageRow = await wixData
    .query("Messages")
    .eq("_id", id)
    .find();
  let ownerId = messageRow.items[0]._owner;
  let ownerEmail = messageRow.items[0].Email;

  let user = wixUsers.currentUser;

  let followRow = await wixData
    .query("following")
    .eq("_id", user.id)
    .find();
  console.log("Btuun ID", $w("#followButton"));
  if (!followRow.items.length) {
    let toInsert = {
      _id: user.id,
      follow: [ownerEmail]
    };
    wixData.insert("following", toInsert);
  } else {
    let rowBeforeUpdate = followRow.items[0].follow;
    let idx = rowBeforeUpdate.indexOf(ownerEmail);
    if (idx !== -1) {
      rowBeforeUpdate = rowBeforeUpdate.splice(idx, 1);
      $w("#followButton").label = "Unfollow";
    }
    let toUpdate = {
      _id: user.id,
      follow: [...rowBeforeUpdate, ownerEmail]
    };

    wixData.update("following", toUpdate);
  }
}
