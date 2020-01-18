const DevModel = require("../models/devModel");
const util = require("./../util");
const gitHubApi = require("./../api/git");
module.exports = {
  store: async (req, res) => {
    const { name, techs, gitHubName, geo } = req.body;
    let dev = await DevModel.findOne({ name });
    if (!dev) {
      techArray = util.stringToArray(techs);
      geoArray = util.stringToNumberArray(geo);
      const gitHubApiResponse = (await gitHubApi.get(gitHubName)).data;
      const { bio, avatar_url } = gitHubApiResponse;
      const devObj = {
        name,
        techs: techArray,
        avatarURL: avatar_url,
        bio,
        gitHubName,
        geo: {
          type: "Point",
          coordinates: geoArray
        }
      };
      dev = await DevModel.create(devObj);
    }
    res.json(dev);
  },
  find:async (req, res) => {
    const techs = util.stringToArray(req.query.techs);
    const geo = util.stringToNumberArray(req.query.geo);
    const result = await DevModel.find({
      techs: {
        $in: techs
      },
      geo:{
        $near:{
          $geometry:{
            type: "Point",
            coordinates: geo
          },
          $maxDistance: 10000,
        }
      }
    });
    console.log(result)
    res.json(result)
  },
  index: async (req, res) => {
    res.json(await DevModel.find());
  }
};
