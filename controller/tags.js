const Tags = require("../model/tag");

const tagsController = {
    list: async (req, res, next) => {
        const tags = await Tags.find({});
        res.send(tags);
    }
}
module.exports = tagsController;