

const express = require('express')
const { Client } = require('@elastic/elasticsearch')
const config = require('config');
const elasticConfig = config.get('elastic');
const fs = require('fs');

async function run () {
const client = new Client({ 
    node: 'http://localhost:9200'
})

/*fs.readFile('airbnbmatinique2.ndjson', 'utf8', function (err, data) {
    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        indexAirbnb(line);
 });


})*/
//const dataset = fs.readFileSync('airbnbmatinique2.ndjson', 'utf8');



const operations = dataset.flatMap(doc => [{ index: { _index: 'airbnbmartinique2' } }, doc])

const bulkResponse = await client.bulk({ refresh: true, operations })

async function tutu (line) {
    //console.log(line);
    client.index({
        index: 'data3',
        id: 1,
        body: line
    })
}
}


const dataset = [{
    "url": "https://www.airbnb.com/rooms/11185371",
    "name": "Ty Farniente",
    "stars": 5,
    "numberOfGuests": 2,
    "address": "Sainte-Luce, Le Marin, Martinique",
    "roomType": "Entire guest suite",
    "location": {
      "lat": 14.481,
      "lon": -60.924
    },
    "reviews": [],
    "pricing": {
      "rate": {
        "amount": 95,
        "amount_formatted": "€95",
        "currency": "EUR",
        "is_micros_accuracy": false
      },
      "rate_type": "nightly",
      "rate_with_service_fee": {
        "amount": 95,
        "amount_formatted": "€95",
        "currency": "EUR",
        "is_micros_accuracy": false
      }
    },
    "calendar": [
      {
        "available": false,
        "date": "2022-03-27"
      },
      {
        "available": false,
        "date": "2022-03-28"
      },
      {
        "available": false,
        "date": "2022-03-29"
      },
      {
        "available": false,
        "date": "2022-03-30"
      },
      {
        "available": false,
        "date": "2022-03-31"
      },
      {
        "available": false,
        "date": "2022-04-01"
      },
      {
        "available": false,
        "date": "2022-04-02"
      },
      {
        "available": false,
        "date": "2022-04-03"
      },
      {
        "available": false,
        "date": "2022-04-04"
      },
      {
        "available": false,
        "date": "2022-04-05"
      },
      {
        "available": false,
        "date": "2022-04-06"
      },
      {
        "available": false,
        "date": "2022-04-07"
      },
      {
        "available": false,
        "date": "2022-04-08"
      },
      {
        "available": false,
        "date": "2022-04-09"
      },
      {
        "available": false,
        "date": "2022-04-10"
      },
      {
        "available": false,
        "date": "2022-04-11"
      },
      {
        "available": false,
        "date": "2022-04-12"
      },
      {
        "available": false,
        "date": "2022-04-13"
      },
      {
        "available": false,
        "date": "2022-04-14"
      },
      {
        "available": false,
        "date": "2022-04-15"
      },
      {
        "available": false,
        "date": "2022-04-16"
      },
      {
        "available": false,
        "date": "2022-04-17"
      },
      {
        "available": true,
        "date": "2022-04-18"
      },
      {
        "available": true,
        "date": "2022-04-19"
      },
      {
        "available": true,
        "date": "2022-04-20"
      },
      {
        "available": true,
        "date": "2022-04-21"
      },
      {
        "available": true,
        "date": "2022-04-22"
      },
      {
        "available": false,
        "date": "2022-04-23"
      },
      {
        "available": false,
        "date": "2022-04-24"
      },
      {
        "available": false,
        "date": "2022-04-25"
      },
      {
        "available": false,
        "date": "2022-04-26"
      },
      {
        "available": false,
        "date": "2022-04-27"
      },
      {
        "available": false,
        "date": "2022-04-28"
      },
      {
        "available": false,
        "date": "2022-04-29"
      },
      {
        "available": false,
        "date": "2022-04-30"
      }
    ]
  }];

run().catch(console.log)

