const BigToken = artifacts.require("BigToken");

module.exports = function (deployer) {
  deployer.deploy(BigToken);
};
