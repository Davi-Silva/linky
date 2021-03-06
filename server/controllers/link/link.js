const Link = require('../../models/link/Link');
const { generateUniqueId } = require('../../utils/generators/random/random');

module.exports = {
  index: async (req, res) => {
    try {
      const allLink = await Link.find();

      if (allLink.length === 0) {
        return res.status(204).send({
          status_code: 204,
          results: [],
        });
      }

      return res.status(200).send({
        status_code: 200,
        results: allLink
      })

    } catch (err) {
      return res.status(500).send({
        status_code: 500,
        results: [],
        errors: [err.message]
      });
    }
  },

  create: async (req, res) => {
    try {
      const { userId, originalURL } = req.body;

      let errors = []

      if (userId === undefined) {
        errors.push('userId is required.')
      }
      if (userId.length === 0) {
        errors.push('userId must be a valid URL.')
      }

      if (originalURL === undefined) {
        errors.push('originalURL is required.')
      }
      if (originalURL.length === 0) {
        errors.push('originalURL must be a valid URL.')
      }

      if (errors.length > 0) {
        return res.status(400).send({
          status_code: 400,
          results: [],
          errors: errors
        });
      }

      let uniqueId;
      let existingLink;

      do {
        uniqueId = generateUniqueId(4, 'hex', 36);
        existingLink = await Link.findOne({ uniqueId });
      } while (existingLink !== null);

      const newLink = new Link({
        user: userId,
        originalURL,
        uniqueId
      })

      const newLinkObj = await newLink.save();

      return res.status(200).send({
        status_code: 200,
        results: newLinkObj,
      });

    } catch (err) {
      return res.status(500).send({
        status_code: 500,
        results: [],
        errors: [err.message]
      });
    }
  },

  getLink: async (req, res) => {
    try {
      const { id } = req.query;

      let errors = [];

      if (id === undefined) {
        errors.push('id is required.')
      }
      if (id.length === 0) {
        errors.push('id must be a valid URL.')
      }

      if (errors.length > 0) {
        return res.status(400).send({
          status_code: 400,
          results: [],
          errors: errors
        });
      }

      const linkObj = await Link.findOne({
        uniqueId: id,
      });

      console.log('linkObj:', linkObj)

      if (!linkObj) {
        return res.status(204).send({
          status_code: 204,
          results: {},
        });
      }

      return res.status(200).send({
        status_code: 200,
        results: linkObj,
      });

    } catch (err) {
      return res.status(500).send({
        status_code: 500,
        results: [],
        errors: [err.message]
      });
    }
  }
}