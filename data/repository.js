const UserModel = require("../models/UserSchema");

const NOT_LOGGED_IN_MESSAGE = "User is not logged in";

async function getUserShows(userId) {
  if (!(await userIsLoggedIn(userId))) {
    console.log(NOT_LOGGED_IN_MESSAGE);
    return;
  }

  console.log(`Getting show data for user ${userId}`);

  const userObject = await UserModel.findOne({
    userEmail: normalizeString(userId),
  });

  const userShowData = userObject.userShows;

  return userShowData;
}

async function updateUserShows(userId, shows) {
  if (!(await userIsLoggedIn(userId))) {
    console.error(NOT_LOGGED_IN_MESSAGE);
    return { error: "error", message: NOT_LOGGED_IN_MESSAGE };
  }

  const user = await UserModel.findOne({ userEmail: userId });

  if (!user) {
    console.error("User is not valid");
    return { error: "error", message: NOT_LOGGED_IN_MESSAGE };
  }

  user.userShows = shows;
  await user.save();

  /*
    const user = await UserModel.findOne({ userEmail: userId });

    if (!user) {
      console.error("User is not valid");
      return { error: "error", message: NOT_LOGGED_IN_MESSAGE };
    }

    const updates = [];

    if (Array.isArray(shows)) {
      console.log("Updating by array");
      upsert(user, shows, updates);
    } else {
      console.log("Updating by object");
      upsert(user, [shows], updates);
    }

    user.userShows.push(...updates);

    await user.save();
  }

  function upsert(user, shows, updates) {
    for (let _show of shows) {
      if (!_show?._id) {
        console.log(`Inserting new show: ${_show.showTitle}`);
        updates.push(_show);
        continue;
      }

      const findIndex = user.userShows.findIndex((show) => {
        const _ = show._id === _show?._id || show._id.toString() === _show?._id;
        return _;
      });

      console.log("Found index:", findIndex);

      if (findIndex > -1) {
        console.log(`Updating show: ${_show._id}`);
        user.userShows[findIndex] = _show;
      } else {
        console.log(`Inserting show: ${_show._id}`);
        updates.push(_show);
      }
    }
  */
}

async function createNewUser(email, password) {
  await UserModel.findOneAndUpdate(
    { userEmail: normalizeString(email) },
    {
      userEmail: normalizeString(email),
      userPassword: password,
      userIsLoggedIn: false,
      userShows: [],
    },
    {
      upsert: true,
    },
  );
}

async function authorizeUser(email) {
  const user = await UserModel.findOne({ userEmail: normalizeString(email) });

  user.userIsLoggedIn = true;

  await user.save();
}

async function deAuthorizeUser(email) {
  const user = await UserModel.findOne({ userEmail: normalizeString(email) });

  user.userIsLoggedIn = false;

  await user.save();
}

async function validateCredentials(userId) {
  const user = await UserModel.find({ userEmail: normalizeString(userId) });

  return user.length > 0;
}

async function userIsLoggedIn(userId) {
  const user = await UserModel.findOne({ userEmail: normalizeString(userId) });

  return user && user.userIsLoggedIn;
}

const normalizeString = strIn => strIn.toLowerCase();

module.exports = {
  getUserShows,
  updateUserShows,
  validateCredentials,
  createNewUser,
  authorizeUser,
  deAuthorizeUser,
};
