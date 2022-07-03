This repo will use the private native binary you created in the [native repo project](https://github.com/ywongweb/barebonePub)

### How to use this project
- Clone this project and open it in your IDE, search the code and replace all instances of `<YOUR-GITHUB-USERNAME>` with your github username.
- [Create a GH publish token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) if you don't already have one.
- Open `/.npmrc` in your IDE and replace `<GITHUB_PUBLISH_TOKEN>` with your push token.
- install project dependencies with `yarn`
- boot up an iOS simulator and run `yarn ios`
- make some changes to `/src/App.tsx` and see it show up in the simulator
- congratulation! Hope you enjoy this new React Native development experience.
