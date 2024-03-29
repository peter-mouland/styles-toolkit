## Contributing Workflow

 > We are following the [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

 * Add more styles to the `/src/` directory
 * ensure the `docs` is updated to include the new styles
 * build and test the app using:
    * `npm run build`
    * `npm start`
    * Test the app in http://localhost:8080
    
## Deploying

 > We deploy to the Amazon S3
 
You will need have the following environment variables set up:

 * STYLES_TOOLKIT_ACCESS_KEY
 * STYLES_TOOLKIT_SECRET
 * STYLES_TOOLKIT_BUCKET

To deploy ensure you bump the version number appropriately first:

 * `npm version major|minor|patch` [more info](https://docs.npmjs.com/cli/version)
 
Then run the deploy script:

 * `npm run deploy`