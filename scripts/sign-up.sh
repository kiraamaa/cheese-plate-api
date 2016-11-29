#!/bin/bash

# API="http://httpbin.org"
# URL_PATH="/post"

API="http://localhost:7165"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=${NAME}" \
  --data-urlencode "credentials[password]=${PASSWORD}" \
  --data-urlencode "credentials[password_confirmation]=${PASSWORD}" \
