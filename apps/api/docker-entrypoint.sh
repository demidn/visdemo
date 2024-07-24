#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

/app/wait-for-it.sh -t 120 "$DB_HOST:$DB_PORT"
/app/wait-for-it.sh -t 120 "rabbitmq:5672"

# Run the main container command.
exec "$@"
