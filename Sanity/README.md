# Sanity: Back-end CMS

  <br>
  <br>

## About

- Used to store images, project information and blog posts (blog will be added later).

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

- run `sanity deploy` to run deployment if schema changed

### Trigger deploy when Sanity Content updated

- Add build hook (triggers a build) in Netlify dashboard. Copy URL.
- In Sanity folder -> terminal: `sanity hook create`

## Adding data for live website

- Login to [sanity.io](https://www.sanity.io/) to find the Sanity Studio URL for the project. You can easily add new data in the studio.

## Note

If Gatsby GraphiQL does not show updated data after adding data to Sanity, try delete the Gatsby `.cache` file.
