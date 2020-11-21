const Link = require('../../models/link/Link');

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

  indexByUser: async (req, res) => {
    try {
      const { userId } = req.params;
      console.log('userId:', userId)

      let errors = [];

      if (userId === undefined) {
        errors.push('userId is required.');
      }
      if (userId.length === 0) {
        errors.push('userId must be valid.');
      }

      if (errors.length > 0) {
        return res.status(400).send({
          status_code: 400,
          results: [],
          errors
        });
      }

      const allLink = await Link.find({
        user: userId
      });

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

  getNumberOfLinks: async (req, res) => {
    try {
      const { userId } = req.query;

      let errors = [];

      if (userId === undefined) {
        errors.push('userId is required.');
      }
      if (userId.length === 0) {
        errors.push('userId must be valid.');
      }

      if (errors.length > 0) {
        return res.status(400).send({
          status_code: 400,
          results: [],
          errors
        });
      }

      const allLinks = await Link.find({
        user: userId
      });

      return res.status(200).send({
        status_code: 200,
        results: allLinks.length
      })

    } catch (err) {
      return res.status(500).send({
        status_code: 500,
        results: [],
        errors: [err.message]
      });
    }
  }
}