const axios = require("axios");
const HttpStatusCode = require("../common/httpStatusCodes");
const repository = require("../data/repository");

async function loginUser(request, response) {
  const email = request.body.data.email;
  const password = request.body.data.password;
  const userIsAuthenticated = await validateAuth(email, password);

  console.log("USERISAUTHENTICATED>", userIsAuthenticated);

  if (!userIsAuthenticated) {
    console.log(`Creating new user ${email}`);
    await repository.createNewUser(email, password);
  }

  console.log(`Logging in user ${email}`);

  await repository.authorizeUser(email);

  try {
    response.status(HttpStatusCode.OK).send({ email });
  } catch (error) {
    console.error(error);
    response.status(HttpStatusCode.InternalServerError);
  }
}

async function logoutUser(request, response) {
  try {
    const email = request.body.data.email;
    await repository.deAuthorizeUser(email);
    response.status(HttpStatusCode.OK).send({ email });
  } catch (error) {
    console.error(error);
  }
};

async function validateAuth(email, password) {
  try {
    return await repository.validateCredentials(email, password);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  loginUser,
  logoutUser,
};
