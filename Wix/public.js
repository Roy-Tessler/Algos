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

$w.onReady(function() {
  wixData
    .query("Members/PrivateMembersData")
    .eq("_id", wixUsers.currentUser.id)
    .find()
    .then(results => {
      $w("#userEmai").value = results.items[0].loginEmail;
      $w("#messagesWrite").setFieldValue("Email", $w("#userEmai").value);
    });
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
  let may = $w.at(event.context);

  let user = wixUsers.currentUser;

  let followRow = await wixData
    .query("following")
    .eq("_id", user.id)
    .find();

  if (may("#followButton").label === "Follow") {
    may("#followButton").label = "Unfollow";
    follow(followRow, user, ownerEmail);
  } else {
    may("#followButton").label = "Follow";
    unfollow(followRow, user, ownerEmail);
  }
}

function follow(followRow, user, ownerEmail) {
  if (!followRow.items.length) {
    let toInsert = {
      _id: user.id,
      follow: [ownerEmail]
    };
    wixData.insert("following", toInsert);
  } else {
    let rowBeforeUpdate = followRow.items[0].follow;
    if (rowBeforeUpdate.includes(ownerEmail)) {
      return;
    }
    let toUpdate = {
      _id: user.id,
      follow: [...rowBeforeUpdate, ownerEmail]
    };

    wixData.update("following", toUpdate);
  }
}

function unfollow(followRow, user, OwnerEmail) {
  if (followRow.items[0].follow.length === 1) {
    let toEmpty = {
      _id: user.id,
      follow: []
    };
    wixData.update("following", toEmpty);
  } else {
    let rowBeforeUpdate = followRow.items[0].follow;
    let idx = rowBeforeUpdate.indexOf(OwnerEmail);
    let spliced = rowBeforeUpdate.splice(idx, 1);
    let toUpdate = {
      _id: user.id,
      follow: [...spliced]
    };

    wixData.update("following", toUpdate);
  }
}

// let user = wixUsers.currentUser;
// let userId = user.id; // "r5cme-6fem-485j-djre-4844c49"
// let isLoggedIn = user.loggedIn; // true
// let email = await user.getEmail()
