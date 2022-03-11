const db = require("../models");
const Cert = db.certificates;
const Op = db.Sequelize.Op;

// Create and Save a new Certificate
exports.create = (req, res) => {
// Validate request
    if (!req.body.cname) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Certificate
    const certificates = {
        cname: req.body.cname,
        vp: req.body.vp,
        application: req.body.application,
        issuer: req.body.issuer,
        expiration: req.body.expiration
    };

    // Save Certificate in the database
    Cert.create(certificates)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Certificate."
            });
        });
};

// Retrieve all Certificate from the database.
exports.findAll = (req, res) => {
    const cname = req.query.cname;
    var condition = cname ? { cname: { [Op.iLike]: `%${cname}%` } } : null;

    Cert.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Certificate with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cert.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Certificates with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Certificates with id=" + id
            });
        });
};

// Update a Certificate by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Cert.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Certificate was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Certificate with id=${id}. Maybe Certificate was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Certificate with id=" + id
            });
        });
};

// Delete a Certificate with the specified id in the request
exports.delete = (req, res) => {

};
