# nodejs-mongodb-api

Just a model for NodeJS and MongoDB API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* You need to install NodeJS and NPM
* You need to install and run MongoDB
* Start a MongoDB client and create a database called "artdb"

```
mongo
```

```
use artdb
```

### Installing

Clone the repository and get into it
Run the following to load the data into MongoDB server

```
npm run fill-db
```

You can use the following to drop the collection

```
npm run clear-db
```

* Start the server

```
npm run start
```

And there you go.

## Testing

For testing you can use Postman GET request as follows:

```
localhost:3000/api/artlist
```

```
localhost:3000/api/artlist/1
```

## Authors

* **David** - *Initial work* - [usrDavid](http://www.usrdavid.com)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
