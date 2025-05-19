const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let notes = [];

// POST /notes - Create a new note
app.post('/notes', (req, res) => {
  const note = req.body;
  note.id = Date.now().toString();
  notes.push(note);
  res.status(201).json(note);
});

// GET /notes - Retrieve all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// GET /notes/:id - Retrieve a specific note by ID
app.get('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === req.params.id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  res.json(note);
});

// PUT /notes/:id - Update a note
app.put('/notes/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }

  notes[index] = { ...notes[index], ...req.body };
  res.json(notes[index]);
});

// DELETE /notes/:id - Delete a note
app.delete('/notes/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }
  
  notes.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {}); 