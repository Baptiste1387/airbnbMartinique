//const { Client } = require('@elastic/elasticsearch')
//const client = new Client({
//  node: 'http://localhost:9200'
//})
//
//
//client.info()
//  .then(response => console.log(response))
//  .catch(error => console.error(error))

//elastic
//iKYz2-=-dKbSk9+8Rf9b


const express = require('express')
const { Client } = require('@elastic/elasticsearch')
const config = require('config');
const elasticConfig = config.get('elastic');


const client = new Client({ 
    node: 'http://localhost:9200'
})

async function IndexValues () {
    await client.index({
        index: 'data2',
        id: 1,
        body: {
          name: 'Simon',
          lastname: 'AZE'
        }
    })
    await client.index({
        index: 'data',
        id: 2,
        body: {
          name: 'Theo',
          lastname: 'ERT'
        }
     })
    await client.index({
        index: 'data',
        id: 3,
        body: {
          name: 'Nadia',
          lastname: 'TYU'
        }
    })

    await client.indices.refresh({ index: 'data' })

    
    
    const { body } = await client.search({
        index: 'data',
        body: {
          query: {
            match_all: {}
          }
        }
    })
    
    //console.log(body.hits.hits)
    
}

 IndexValues().catch(console.log)