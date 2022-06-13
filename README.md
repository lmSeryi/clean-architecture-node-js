# Node JS Clean Architecture (My First Try)

### How to use

- Install dependencies.

```sh
npm install
```

###### Optional
- Run docker-compose to set up the DB.

````sh
docker-compose up
````

### Env Variables

- DB_URI: If you are running in localhost, please 127.0.0.1 instead.
- PORT

#### Development Environment
- Build the app.
```sh
npm run build 
```

- Run the app.

```sh
npm run dev
```

#### Production Environment

- Run the app.

```sh
npm start
```

# Notes

#### For testing

- Execute the test command.

```sh
npm run test
```

#### If you have SonarQube, follow the next steps:

- Fill the template and feel free to modify it.
- Run the sonar-scanner.

```sh
sonnar-scanner
```