module.exports = (sequelize, Sequelize) => {
  const Cert = sequelize.define("certificates", {
    cname: {
      type: Sequelize.STRING,
      allowNull: false, // Ensures cname cannot be null
    },
    vp: {
      type: Sequelize.STRING,
      allowNull: false, // Ensures vp cannot be null
    },
    application: {
      type: Sequelize.STRING,
      allowNull: true, // Explicitly specifies that application can be null
    },
    subject: {
      type: Sequelize.STRING
    },
    issuer: {
      type: Sequelize.STRING
    },
    expiration: {
      type: Sequelize.STRING
    }
  });
};
