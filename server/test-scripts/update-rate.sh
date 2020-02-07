curl -i -X PUT \
	-H "Content-type: application/json" \
	-d '{"rate": "'"$2"'"}' \
	localhost:8080/images/$1
