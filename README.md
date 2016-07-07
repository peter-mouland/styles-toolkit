# styles-toolkit

 > Notonthehighstreet's style toolkit

This repo contains all the core styles used across the NotOnTheHighStreet.com application.

## CDN

 * `http://cdn.notonthehighstreet.com/styles-toolkit/0.0.1/toolkit.css`

## Contributing Workflow

 > We are following the [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

 * Add more styles to the `/styles/toolkits/` directory
 * ensure the `examples_app` is updated to include the new styles
 * build and test the app using:
    * `npm run build`
    * `npm start`
    * Test the app in http://localhost:8080
    
## Deploying

 > We deploy to the Amazon S3
 
To deploy you will need have the following environment variables set up:

 * STYLES_TOOLKIT_ACCESS_KEY
 * STYLES_TOOLKIT_SECRET
 * STYLES_TOOLKIT_BUCKET
