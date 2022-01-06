# Sanity - Backend CMS

  <br>
  <br>

## About

- Used to store images, project information and blog posts.

  <br>
  <br>

## Development

- Initialize an app (create a project): `sanity init --reconfigure`
- Log in from the command line: `sanity login`
- Run the app: `npm start` -> runs `sanity start`. Runs localhost server (Sanity Studio). Sanity is the API, Sanity Studio is the UI to view and update data.

> If Schema changed -> re-deploy: `sanity graphql deploy production`. Restart Gatsby as well.

<br>
<br>

## Deployment

### Trigger deploy when Sanity Content updated

- Add build hook (triggers a build) in Netlify dashboard. Copy URL.
- In Sanity folder -> terminal: `sanity hook create`
