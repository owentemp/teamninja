var Config = module.exports;

Config.getCgApiKey = function() {
  return process.env.CAMPGROUNDKEY; // Return the API key
};

Config.getOtherKey = function() {
  return ''
};
