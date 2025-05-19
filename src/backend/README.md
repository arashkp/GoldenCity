# GoldenCity Notes API

A simple RESTful API for a Notes application.

## Endpoints

- **POST /notes** - Create a new note
- **GET /notes** - Retrieve all notes
- **GET /notes/:id** - Retrieve a specific note by ID
- **PUT /notes/:id** - Update a note
- **DELETE /notes/:id** - Delete a note

## Test:
**New Note:**
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"title":"Note 1","content":"This is a note 1."}'

**All Note:**
curl http://localhost:3000/notes

**Get single note:**
curl http://localhost:3000/notes/{note_id}

**Update a note:**
curl -X PUT http://localhost:3000/notes/{note_id} -H "Content-Type: application/json" -d '{"title":"Note 2","content":"This note has been updated to note 2."}'

**Delete a note:**
curl -X DELETE http://localhost:3000/notes/{note_id}

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

The server will run at http://localhost:3000. 