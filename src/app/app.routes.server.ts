import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'tickets-store/:id', renderMode: RenderMode.Server },
  { path: 'my-quizzes', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender },
];
