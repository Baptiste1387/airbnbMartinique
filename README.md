
## Lancer un container elastic
docker run --name es01-test --net elastic -p 127.0.0.1:9200:9200 -p 127.0.0.1:9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.17.3

## Lancer un container Kibana
docker run --name kib01-test --net elastic -p 127.0.0.1:5601:5601 -e "ELASTICSEARCH_HOSTS=http://es01-test:9200" docker.elastic.co/kibana/kibana:7.17.3

## Se connecter à Kibana
http://localhost:5601/

## Créer l'index
- Menu -> Dev Tools
- copier/coller le fichier indexELS et cliquer sur "play" (fleche verte) pour créer l'index
- Menu -> Stack Management  -> Kibana -> Index Pattern -> Create Index Pattern
- Dans le champ "Name" saisir "airbnb*" et dans le champs timestamp "Idont want to use the time filter"
- Cliquer sur create index

## Alimenter l'index via le script nodejs
- Se mettre sur le répertoire 
- lancer "nodejs martinique.js"

## Vérifier que l'index est alimenté
- Menu -> Discover 
- Vérifier qu'il y a des données