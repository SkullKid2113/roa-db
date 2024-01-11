#!/usr/bin/env bash

set -e
set -o pipefail

# Start a mariadb docker container with the assets/ddl directory mounted as a volume
docker run \
  -dit -p 3306:3306 \
  --name roadb \
  -e MYSQL_ROOT_PASSWORD=banana \
  -v $(pwd)/assets:/assets mariadb:10.3