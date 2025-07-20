import 'zone.js/node';
import express from 'express';
import { renderApplication } from '@angular/platform-server';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

const server = express();
const port = process.env['PORT'] || 4000;

server.get('*', async (req, res) => {
  try {
    const html = await renderApplication(() =>
      bootstrapApplication(App, {
        providers: [provideRouter(routes)],
      }),
      {
        document: '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>AlemanConBetty</title></head><body><app-root></app-root></body></html>',
        url: req.url
      }
    );
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send(err instanceof Error ? err.message : String(err));
  }
});

server.listen(port, () => {
  console.log(`✅ Angular SSR server is running at http://localhost:${port}`);
});
