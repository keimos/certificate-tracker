module.exports = app => {
  const certificates = require("../controllers/certificates.controller.js");

  var router = require("express").Router();

  // Create a new Certificates
  router.post("/", certificates.create);

  // Retrieve all Certificates
  router.get("/", certificates.findAll);

  // Retrieve a single Certificates with id
  router.get("/:id", certificates.findOne);

  // Update a Certificates with id
  router.put("/:id", certificates.update);

  // Delete a Certificates with id
  router.delete("/:id", certificates.delete);

  app.use('/api/certificates', router);
};
