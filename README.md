# What is this

This is the front end for my resume, its written in React with typescript.
It communicates with the back end, with components, query hooks, and a schema provided by drf-spectacular (openAPI, swagger)

The idea is the resume info is easily changed from the admin panel,
and then a PDF resume can be exported from the website, so both the website and the PDF are always updated,
and syncing them manually is not needed.

# React + TypeScript + Vite

## TailwindCSS for styling, react-query+axios for api access

## development

Using swagger-typescript-api just run

```
npm run schema
```

to sync API with local dev server

Backend is django (seperate repo), pdf export is done in django.

to start the dev server, have an .env or .env.development file with VITE_API_URL set to your local server. there is no development with a staging server at this time.
and then run the server:

`npm run dev`

## deploy

deployed to AWS Amplify, pushing to prod deploys.
