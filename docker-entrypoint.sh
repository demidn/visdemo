#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

/app/wait-for-it.sh "$DB_HOST:$DB_PORT"
/app/wait-for-it.sh "rabbitmq:5672"

# Run the main container command.
exec "$@"
