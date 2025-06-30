import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),  // ✅ Aquí habilitas HttpClient globalmente
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
