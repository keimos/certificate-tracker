module.exports = (sequelize, Sequelize) => {
  const Cert = sequelize.define("certificates", {
    cname: {
      type: Sequelize.STRING
    },
    vp: {
      type: Sequelize.STRING
    },
    application: {
      type: Sequelize.STRING
    },
    issuer: {
      type: Sequelize.STRING
    },
    expiration: {
      type: Sequelize.STRING
    }
  });

  return Cert;
};
