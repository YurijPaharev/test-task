curl -i -X POST \
	-H "Content-type: application/json" \
	-d '{
    "id": "56bd6a2b-229d-49db-8423-ae23d43b01c6",
    "url": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c25f6231998889.5680cb1bc3300.jpg",
    "title": "Lock, Stock and Two Smoking Barrels",
    "desciption": "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
    "date": "28 August 1998",
    "rate": "5"
  }' \
	localhost:8080/images/
