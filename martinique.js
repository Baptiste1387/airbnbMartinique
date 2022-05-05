const express = require('express')
const { Client } = require('@elastic/elasticsearch')
const fs = require('fs');

async function run () {
  fs.readFile('airbnb-martinique.json', 'utf8', (err, data) => {

      if (err) {
          console.log(`Error reading file from disk: ${err}`);
      } else {

          // parse JSON string to JSON object
          const dataset = JSON.parse(data);
          bulk(dataset);
          
      }

  });

}

async function bulk (dataset){
  const client = new Client({ 
      node: 'http://localhost:9200'
  })
  const operations = dataset.flatMap(doc => [{ index: { _index: 'airbnbmartinique2' } }, doc])
  console.log(operations)
  const bulkResponse = await client.bulk({ refresh: true, operations })
}

run().catch(console.log)

