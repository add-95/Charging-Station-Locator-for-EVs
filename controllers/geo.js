var NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyB8SBn6rHz9NIEYVU8J4l-H-AWZwrJ2NWI', // for Mapquest, OpenCage, Google Premier
    formatter: 'json' // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

geocoder.reverse({ lat: 28.5967439, lon: 77.3285038 }, function (err, res) {
    console.log(res);
});