:: The idea of this script is to help to interact with the BE Container with a double click.

@ECHO off
SETLOCAL

ECHO "Hello there! Let's interact with your Backend Container"

docker exec -it go_backend sh

ECHO "Bye!"
ECHO "Made with <3 by Carlos Santos <c42759@gmail.com>"

timeout /t 3