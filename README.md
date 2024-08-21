The four task management applications that are implemented the micro frontend architecture.
Made with **React**, **Vite** and **Vite Module Federation Plugin**.

-   Tasks have a name, description, deadline, priority and status (completed/not completed).
-   The user can create, view, edit, mark as completed and delete tasks.
-   Filtering tasks based on title, deadline, priority or status.
-   Sorting tasks based on priority or status.
-   shadcn/ui is used as component library.
-   tailwind is used as CSS framework.
-   Supabase database stores and handles tasks data.
-   User sign up and log in functionality is implemented using Supabase Auth.
-   The micro frontend architecture is implemented using **Vite** and the **Vite Module Federation Plugin**.
-   The application is deployed on Vercel and AWS CloudFront.

## Structure

**task-auth** app handles user authentication.
**task-editor** app is for creating and editing tasks.
**task-list** app is for the displaying and filtering tasks.
**task-host** app is a host application that integrates all subsidiary micro frontends.

## Hosting

Vercel: https://task-host.vercel.app/
AWS CloudFront: https://d3smx9ac9s8t0.cloudfront.net/

## Run app

1. Navigate to each micro frontend: `cd task-[mfe-name]`
2. Install dependencies: `npm i`
3. Build the project: `npm build`
4. Preview the build: `npm preview`

## Manually Deployment Instructions to Vercel

1. Navigate to each micro frontend: `cd task-[mfe-name]`
2. Set up and deploy: `npx vercel`
3. Deploy to production: `npx vercel --prod`
