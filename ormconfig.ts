require('dotenv').config();

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrationsTableName: "migrations",
  entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
  migrations: ["dist/src/migrations/*.js"],
  ssl: {
    rejectUnauthorized: false,
  },
  cli: {
    migrationsDir: "dist/src/migrations",
    entitiesDir: "dist/src/entities/*.js"
  }
};