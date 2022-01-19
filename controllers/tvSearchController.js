const axios = require("axios");
const TvMazeEndpointUri = "https://api.tvmaze.com/search/shows?q=";
const HttpStatusCode = require("../common/httpStatusCodes");
const Show = require("../models/Show");


async function searchTvShows(request, response) {
  const query = encodeURI(TvMazeEndpointUri + request.params.query);

  console.log(query);

  try {
    const searchResult = await axios.get(query);

    const responseShape = toDomainModel([...searchResult.data]);

    response.status(HttpStatusCode.OK).send(responseShape);
  } catch (error) {
    console.error(error);

    // todo: differentiate server/client errors
    response.status(HttpStatusCode.CLIENT_ERROR_NOT_FOUND);
  }
}

function toDomainModel(upstreamDomainModelArray) {
  const DEFAULT = "";

  return upstreamDomainModelArray.map(show =>
    new Show({
      showTitle: show.show?.name ? show.show.name : DEFAULT,
      showDescription: show.show?.summary ? show.show.summary : DEFAULT,
      showStatus: show.show?.status ? show.show.status : DEFAULT,
      showNextEpisode24HourTime: show.show?.schedule?.time ? show.show.schedule.time : DEFAULT,
      showTimezone: show.show?.network?.country?.timezone ? show.show.network.country.timezone.replace(/[_]/g, " ") : DEFAULT,
      showNextEpisodeDayOfWeek: show.show?.schedule?.days ? show.show.schedule.days : null,
      showNetwork: show.show?.network?.name ? show.show.network.name : DEFAULT,
      showImageSmall: show.show?.image?.medium ? show.show.image.medium : DEFAULT,
      showImageLarge: show.show?.image?.original ? show.show.image.original : DEFAULT,
    }),
  );
}

module.exports = {
  searchTvShows,
};
