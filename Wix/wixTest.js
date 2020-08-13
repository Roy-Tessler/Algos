// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixData from "wix-data";
import wixUsers from "wix-users";
import wixLocation from "wix-location";
import wixWindow from "wix-window";
import * as realtime from "wix-realtime";

async function getData() {
  let firstQuery = await wixData
    .query("Members/PrivateMembersData")
    .eq("_id", wixUsers.currentUser.id)
    .find();
  $w("#userEmai").value = firstQuery.items[0].loginEmail;
  $w("#messagesWrite").setFieldValue("Email", $w("#userEmai").value);
  let query = await wixData
    .query("Messages")
    .limit(1000)
    .find();
  console.log("new query items......", query.items);
  return await query.items;
}

export async function getNotificationData() {
  let messagesQuery = await wixData
    .query("Messages")
    .limit(1000)
    .find();
  let followingQuery = await wixData
    .query("following")
    .eq("_id", wixUsers.currentUser.id)
    .find();

  if (!followingQuery.items[0]) return;
  followingQuery = followingQuery.items[0].follow;
  let filteredQuery = messagesQuery.items.filter(msg =>
    followingQuery.includes(msg.Email)
  );
  return filteredQuery;
}

$w.onReady(() => {
  $w("#messagesWrite").onAfterSave(async () => {
    let data = await getData();
    $w("#messagesList").data = data;
    let ownerEmail = data[0].Email;
    notify(ownerEmail);
  });
  $w("#notifications").onAfterSave(async () => {
    let notData = await getNotificationData();
    if (!Array.isArray(notData)) {
      notData = [];
    }
    $w("#notificationsRead").data = notData;
  });
});

export async function notify(ownerEmail) {
  let user = wixUsers.currentUser;
  let followRow = await wixData
    .query("following")
    .eq("_id", user.id)
    .find();
  let amFollowing = followRow.items[0].follow ? followRow.items[0].follow : [];

  if (amFollowing.includes(ownerEmail)) {
    showBadge();
  }
}

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
  let user = wixUsers.currentUser;
  let userId = user.id;
  let isLoggedIn = user.loggedIn;
  if (!isLoggedIn) {
    $w("#followButton").enabled = false;
  }
  let myEmail = await user.getEmail();
  let id = event.context.itemId;
  let messageRow = await wixData
    .query("Messages")
    .eq("_id", id)
    .find();
  let ownerId = messageRow.items[0]._owner;
  let ownerEmail = messageRow.items[0].Email;
  let may = $w.at(event.context);

  let followRow = await wixData
    .query("following")
    .eq("_id", userId)
    .find();

  if (may("#followButton").label === "Follow") {
    may("#followButton").label = "Unfollow";
    follow(followRow, userId, ownerEmail);
  } else {
    may("#followButton").label = "Follow";
    unfollow(followRow, userId, ownerEmail);
  }
}

export async function follow(followRow, userId, ownerEmail) {
  if (!followRow.items.length) {
    let toInsert = {
      _id: userId,
      follow: [ownerEmail]
    };
    wixData.insert("following", toInsert);
  } else {
    let rowBefore = followRow.items[0].follow;
    if (rowBefore.includes(ownerEmail)) {
      return;
    }
    let toUpdate = {
      _id: userId,
      follow: [...rowBefore, ownerEmail]
    };
    wixData.update("following", toUpdate);
  }
  await getNotificationData();
}

async function unfollow(followRow, userId, OwnerEmail) {
  if (followRow.items[0].follow.length === 1) {
    let toEmpty = {
      _id: userId,
      follow: []
    };
    wixData.update("following", toEmpty);
  } else {
    let rowBeforeUpdate = followRow.items[0].follow;
    let idx = rowBeforeUpdate.indexOf(OwnerEmail);
    let spliced = rowBeforeUpdate.splice(idx, 1);
    let toUpdate = {
      _id: userId,
      follow: [...rowBeforeUpdate]
    };
    wixData.update("following", toUpdate);
  }
  await getNotificationData();
}

export async function notificationButton_click(event) {
  showBadge();
  let isHidden = $w("#notificationsRead").hidden;
  if (isHidden) {
    $w("#notificationsRead").show();
    $w("#notBadge").hide();
  } else {
    $w("#notificationsRead").hide();
    $w("#notBadge").hide();
  }
  let newData = await getNotificationData();
  $w("#notificationsRead").data = newData;
}

function showBadge() {
  $w("#notBadge").show();
}

export function submitButton_click(event) {
  let user = wixUsers.currentUser;
  let userId = user.id;
  let isLoggedIn = user.loggedIn;
  if (!isLoggedIn) {
    $w("#submitButton").enabled = false;
  }
}

$w.onReady(function() {
  const channel = { name: "new-message" };
  realtime.subscribe(channel, newMsg);
});

async function newMsg({ payload }) {
  let data = await getData();
  $w("#messagesRead").refresh();
}
