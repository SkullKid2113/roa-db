#!/usr/bin/env bash

set -e
set -o pipefail

mysql -uroot -pbanana -h localhost < /assets/ddl/001-init.sql
mysql -uroot -pbanana -h localhost < /assets/ddl/002-rules.sql