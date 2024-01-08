# Kitra Game Node.js App

Kitra is a game where users can collect treasures in a given latitude and longitude. This Node.js application allows users to find treasure boxes within a certain distance and value range.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/taliffsss/Serino.git
   ```

2. Navigate to the project directory:

   ```bash
   cd serino
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Rename sample.env to .env

## Database Setup

### MySQL Configuration

1. Ensure you have MySQL installed and running on your machine.

2. Create a MySQL database for the application.

3. Set up the database configuration in the `config/config.json` file.

### Running Migrations and Seeding

Note: Orm use [sequelize](https://sequelize.org/)

To create the necessary tables and seed sample data into the database, run the migrations and seeders:

```bash
-- Generate Seeder
npx sequelize-cli seed:generate --name demo-users
-- Migrate Table and Seeder
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
-- Undo or Rollback
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:undo --seed {seeder-name}
```

### Endpoint

http://localhost:{port}/api/treasures
Sample Payload:

```
{
"latitude":  14.552036595352455,
"longitude":  121.01696118771324,
"distance":  1,
"prize_value"?:  10
}
```

Response:

```
{
  "treasures": [
    {
      "id": 100,
      "Latitude": 14.5438,
      "Longitude": 121.02,
      "Name": "T1",
      "amount": [
        "20",
        "15"
      ],
      "createdAt": "2024-01-08T05:41:58.000Z",
      "updatedAt": "2024-01-08T05:41:58.000Z"
    },
    {
      "id": 102,
      "Latitude": 14.5446,
      "Longitude": 121.02,
      "Name": "T3",
      "amount": [
        "20",
        "15"
      ],
      "createdAt": "2024-01-08T05:41:58.000Z",
      "updatedAt": "2024-01-08T05:41:58.000Z"
    }
  ],
  ....
}
```

http://localhost:{port}/api/auth
Sample Payload:

```
{
"email":  "u1@kitra.abc",
"password":  "123123"
}
```

Response:

```
{
"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAwMCwiZW1haWwiOiJ1MUBraXRyYS5hYmMiLCJpYXQiOjE3MDQ2OTkyNTUsImV4cCI6MTcwNDcwMjg1NX0.T8fMt5MUo3UahAVMwS2nGS1Oz7uRuvcpJbbL0bXIGOc",
"message":  "Login successful"
}
```
