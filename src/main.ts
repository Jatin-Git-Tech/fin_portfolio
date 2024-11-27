import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideEcharts } from 'ngx-echarts';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { FormComponent } from './app/form/form.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './app/http-interceptor.service';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'dashboard' }, // Fallback route
];

bootstrapApplication(AppComponent, {
  providers: [
    provideEcharts(), // Register the ECharts library
    provideRouter([
      { path: 'dashboard', loadComponent: () => import('./app/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'form', loadComponent: () => import('./app/form/form.component').then(m => m.FormComponent) },
    ]),
    provideHttpClient(
      withInterceptors([httpInterceptor]) // Register the interceptor
    ),
    importProvidersFrom(RouterModule)
  ],
});

// bootstrapApplication(AppComponent, {
//   providers: [provideEcharts(), provideRouter(routes)],
// });
