# Financial Portfolio - Features
- Market Trends: Displays a line chart based on market data from a JSON file.
- Asset Allocation: Displays a pie chart representing different investment sectors.
- Form Submission: Accepts user input to dynamically update asset allocation.
- Reusable and Standalone Components: Uses Angular standalone components for modularity.

# Setup instructions

Execute these commands in the mentioned order:
1. git clone https://github.com/your-username/financial-portfolio-dashboard.git
2. cd financial-portfolio-dashboard
3. npm install
4. npm install ngx-echarts echarts
5. Serve the Application Locally.To ensure compatibility with the Angular version specified in this project, use npx 
   to serve the application:
   npx ng serve
   This will start the development server at http://localhost:4200.
6. Open in Browser
   Visit http://localhost:4200 to view the application.


# Handling version issues:

This project is configured with its specific Angular version using package.json. If your global Angular version conflicts, use the following command to install a local version of the Angular CLI temporarily:

- npx @angular/cli@<version> serve

# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
