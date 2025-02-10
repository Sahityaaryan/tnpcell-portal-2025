

Welcome contributors, this is the official site of the Training-Placement-Cell.
This is the setup-guide for this project.


## Setup

1. Make sure you are using Node.js of version 18.20.2. (use nvm to manage different node versions).

## Backend-setup

1. Navigate to : *backend/config/database.js*
		and apply these changes

```
connection: {
host: env('DATABASE_HOST', 'localhost'),

port: env.int('DATABASE_PORT', 5432),

database: env('DATABASE_NAME', 'tnp-test'),

user: env('DATABASE_USERNAME', 'postgres'),

password: env('DATABASE_PASSWORD', '2006001'),

schema: env('DATABASE_SCHEMA', 'public'),

}
```


2. Navigate to : *backend/config/server.js*
		and apply these changes
```
host: env('HOST', 'localhost'),
```

3. Create .env file
```
HOST=localhost
PORT=1337

# Secrets
APP_KEYS=htzTPsYd9S8HVDYLjEV0Mw==,Xos98t1DExntHOWYp+Lsig==,z/FD+o/7CssFOCazeyMZMg==,tqs9jxpDd377JJN0S7pzLQ==
API_TOKEN_SALT=5xi9yU2NklJyFjF79zvPkQ==
ADMIN_JWT_SECRET=YCn/lssPBQuSjxbHSD80Kw==
TRANSFER_TOKEN_SALT=ZSKh7W78CBgaz04bfkwr6Q==

# Database
JWT_SECRET=YjPGJL+7T85jr1SSEkPAPA==
STUDENT_API_TOKEN=2f2e7a78d90d22e4588f5e60476a4f414b06a83573faa39c46d624d1963421ca6121a6c62d3f51d6281646c9a146d8e059328289e8c44f0bf68e3e9ec0fb2c26ea95c609dda2b2427195e1478e24f4e359994865d8142001a2e0d7d5b4d067fd8344e5d0fc7aaef5251c863106d529e7677c84dd
DATABASE_NAME=tnp-test
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=2006001
DATABASE_SCHEMA=public
```

3. To run backend:
	```
	cd backend
	docker compose up -d
	npm run dev || bun dev
	```

## Frontend-setup

1. Navigate to: *frontend/config/index.js*
		and apply these changes
```
export const API_URL =

process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

export const NEXT_URL =

process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'
```


2. To run frontend:
   ```
   cd frontend
   npm run dev || bun dev
   ```

## Strapi-setup

1. Firstly, you have to signup to the strapi,

2. Navigate to: *Settings/Roles*: it will look like [this](https://i.imgur.com/9hAhJyI.png)

3. Now for [roles and permissions configuration](https://docs.google.com/document/d/1D64h39SjRC3-Fcw2RU-U49l82BDDOIVuUudIiUJ9YNk/edit?usp=sharing):

4. Content Manager:
	photo:

5. Create some users of different profile (like coordinator, student etc.)  under "user" relation.


## "document" is not defined (Error)

- This error may come to you for after running the frontend this is basically due to SSR.
- To handle this you should apply the dynamic imports in files containing "Lottie" (About.js , Loading.js and WhyUs.js) under *frontend/components/LandingPageElements*

```
import dynamic from "next/dynamic";

const Lottie = dynamic(()=>import("lottie-react"),{ssr:false})
```

- **Never commit these changes this is only to remove the development error, it is not an error at the production**

## Do's and Don'ts
- Always remove the console.logs which you have created while developing any feature or fixing bugs.
- Make sure you don't expose or hardcode the Backend URL in any of your function.
- Never commit the setup works which you have done inorder to run the project locally.
- Make a new branch for every new bug fixing or feature.
- Your local master || main branch should always be updated with the remote's main branch
- Never make a pull request in the master branch, use test branch for it.
- Pull request must have a detailed description about its intent, you can check the pull request template in **pull_request_template.md**.
- The commits' messages and pull requests titles must be clear about the purpose they serve.
- Watch the official repository so you will be informed about every actions there.
