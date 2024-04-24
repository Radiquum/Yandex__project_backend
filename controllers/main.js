const {staticFile} = require("../appModules/http-utils");
const {endpoints, getData} = require("../appModules/api")
const {makeRatingFile} = require("../appModules/rating")
const { config } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games)

  makeRatingFile(config.PATH_TO_RATING_FILE, data)
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;
