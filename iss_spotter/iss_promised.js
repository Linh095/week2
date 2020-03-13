const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
}
const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`)
};
const fetchISSFlyOverTime = function (body) {
  const data = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${data.data.latitude}&lon=${data.data.longitude}`)
};
const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTime)
    .then((data) => {
      const{ response } = JSON.parse(data);
      return response;
    });
}
module.exports = { nextISSTimesForMyLocation };