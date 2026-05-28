# NestJS Bookings API

## Activity Description

This project is a classroom activity about building a basic REST API with
NestJS. The goal is to understand how a backend application is organized in
NestJS and how to create CRUD endpoints using controllers, services, modules,
DTOs, entities, and Sequelize.

The API currently includes resources for clients and pets. Pets can be either
dogs or cats.

## General Tutorial Overview

The tutorial of Tibu explains the main parts of a NestJS application:

- Controllers define the API endpoints and handle incoming HTTP requests.
- Services contain the business logic and are injected into controllers.
- Providers are classes that NestJS can create and inject automatically.
- Modules group controllers, services, and imported dependencies into a single application unit.
- DTOs define the shape of the data received from or sent to the client.
- Entities represent the database models and tables.

After the basic NestJS structure is explained, Sequelize is added to connect the
application to a database. The database configuration is placed in
`app.module.ts` using `SequelizeModule.forRoot()`. The project enables automatic
model loading and synchronization so the tables are created from the entities.

Next, a REST resource is generated with the NestJS CLI. This creates a module,
controller, service, DTO files, and an entity file. The generated code is then
adapted so the DTO describes the data accepted by the API and the entity
describes the database table.

For each resource, the controller exposes the usual CRUD endpoints:

- `POST` creates a new record.
- `GET` lists all records.
- `GET /:id` returns one record by id.
- `PATCH /:id` updates one record.
- `DELETE /:id` removes one record.

The service uses the Sequelize model through `@InjectModel()` to create, read,
update, and delete records in the database. Finally, the resource module imports
`SequelizeModule.forFeature()` with its entity, and the main application module
imports the resource module.

I tested the API with Postman.

## Project Setup

```bash
npm install
```

## Run the Project

```bash
# development
npm run start

# watch mode
npm run start:dev
```

By default, NestJS runs on port `3000`.

## Main Endpoints

```text
/clients
/pets
```

Example pet request:

```json
{
  "name": "Kiras",
  "type": "cat"
}
```

The accepted pet types are `cat` and `dog`.
