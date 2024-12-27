# Description

## Run in Development

1. Clone the repository.
2. Create a copy of the ```.env.template``` file, rename it to ```.env```, and update the environment variables.
3. Install dependencies: ```npm install```
4. Start the database: ```docker compose up -d```
5. Run Prisma migrations: ```npx prisma migrate dev```
6. Execute the seed script: ```npm run seed```
7. Start the project: ```npm run dev```
