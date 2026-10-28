import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'tickets-store/:id', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Prerender },
];
