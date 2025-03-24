const express = require("express");

module.exports = app => {
  const certificatesController = require("../controllers/certificates.controller.js");

  const router = express.Router();

  // Routes for Certificate operations
  router
    .post("/", certificatesController.create)
    .get("/", certificatesController.findAll)
    .get("/:id", certificatesController.findOne)
    .put("/:id", certificatesController.update)
    .delete("/:id", certificatesController.delete);

  // Attach the router to the application
  app.use('/api/certificates', router);
};
