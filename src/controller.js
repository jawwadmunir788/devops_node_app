// Controller functions
exports.home = (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to DevOps Node App deployed via CI/CD!",
  });
};

exports.health = (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
  });
};
