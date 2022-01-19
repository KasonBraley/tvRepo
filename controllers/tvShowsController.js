const axios = require("axios")
const repository = require("../data/repository")
const HttpStatusCode = require("../common/httpStatusCodes")

async function updateUserShows(request, response) {
    try {
        const show = await repository.updateUserShows(
            request.params.userId,
            request.body
        )
        if (!show?.error) {
            response.status(HttpStatusCode.OK).json(show)
        } else {
            response.status(HttpStatusCode.CLIENT_ERROR_FORBIDDEN).send()
        }
    } catch (error) {
        console.error(error)
        // todo: differentiate server/client errors
        response.status(HttpStatusCode.CLIENT_ERROR_NOT_FOUND).send()
    }
}

async function getUserShows(request, response) {
    try {
        const userId = request.params.userId

        const items = await repository.getUserShows(userId)

        if (!items?.error) {
            response.status(HttpStatusCode.OK).json(items)
        } else {
            response.status(HttpStatusCode.CLIENT_ERROR_FORBIDDEN).send()
        }
    } catch (error) {
        console.error(error)
        // todo: differentiate server/client errors
        response.status(HttpStatusCode.CLIENT_ERROR_NOT_FOUND).send()
    }
}

async function createUserShows(request, response) {
    await updateUserShows(request, response)
}

module.exports = {
    updateUserShows,
    getUserShows,
    createUserShows,
}
