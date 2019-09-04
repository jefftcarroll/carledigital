To run the app,

- cd into plan-select or plan-details depending on what you need
- `yarn && yarn start`

This will install any dependencies and run the app with a dev server on port 3000

Then run the json test stub server

- cd into json-dev-server and run
- `yarn && yarn start`

The json server will run under port 3001

Finally, edit your /etc/hosts file to use the dev domain

- Add this line to the bottom
- 127.0.0.1 dev.simplete.org

Finally, browse the app

plan-select: http://dev.simplete.org:3000/?plan1=M3R&plan2=M3S&plan3=M3T
