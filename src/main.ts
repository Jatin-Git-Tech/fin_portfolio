import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideEcharts } from 'ngx-echarts';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { FormComponent } from './app/form/form.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'dashboard' }, // Fallback route
];

bootstrapApplication(AppComponent, {
  providers: [
    provideEcharts(), // Register the ECharts library
    provideRouter([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./app/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'form', loadComponent: () => import('./app/form/form.component').then(m => m.FormComponent) },
    ]),
    importProvidersFrom(RouterModule)
  ],
});

// bootstrapApplication(AppComponent, {
//   providers: [provideEcharts(), provideRouter(routes)],
// });