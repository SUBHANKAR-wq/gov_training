const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const scenarioRoutes = require('./routes/scenarioRoutes');
const toolRoutes = require('./routes/toolRoutes');
const progressRoutes = require('./routes/progressRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const modulesSeed = require('./seed/modulesSeed');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

app.get('/api/modules', (req, res) => {
  res.json({ success: true, count: modulesSeed.length, data: modulesSeed });
});

app.get('/api/modules/:id', (req, res) => {
  const mod = modulesSeed.find(m => m.id === req.params.id);
  if (!mod) return res.status(404).json({ success: false, message: 'Module not found' });
  res.json({ success: true, data: mod });
});

app.use('/api/scenarios', scenarioRoutes);
app.use('/api/tools', toolRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/assessment', assessmentRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Become AI Smart - Work Better/Serve Better',
    developer: 'AIPNT Technologies Private Limited',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
