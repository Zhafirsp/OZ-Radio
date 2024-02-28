const fs = require("fs")
const stations = require("../Data/stations.json")

for (const station of stations) {
  for (const endpoints of station.endpoints) {
    const matches = endpoints.endpoint.match(/.*?streaming.ozradiojakarta.com\/(.*)/);

    if (matches) {
      endpoints.endpoint = [];
      for (let i = 1; i <= 6; i++) {
        endpoints.endpoint.push(`https://streaming${i}.ozradiojakarta.com/${matches[1]}`);
      }
      console.log(endpoints.endpoint);
    }
  }
}

fs.writeFileSync("./stations.json", JSON.stringify(stations));

// Access-Control-Allow-Origin: '*';
// Access-Control-Allow-Methods: 'GET, OPTIONS';
// Access-Control-Allow-Headers: 'Content-Type, Icy-Metadata';