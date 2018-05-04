## If you know Gant
Just decrypt the AppSync file and use Gant's AWS setup.

Encrypt Directions:
> `openssl des -in AppSync.js -out AppSync.js.enc`

Decrypt Directions:
> `openssl des -d -in AppSync.js.enc -out AppSync.js`

## If you don't know Gant
Watch this video by Nader Dabit - [How to setup GraphQL AppSync](https://www.youtube.com/watch?v=0Xbt7VqkJNc&ab_channel=NaderDabit)

The GraphQL schema is in [AppSyncSchema.json](https://github.com/GantMan/BasicAppSyncExample/blob/master/AppSyncSchema.json)

And point your AppSync.js file at your AWS server.
