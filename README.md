
## Insatall
```
git clone this
cd ../yourproject
npm i -D ../effector-logger_babel-plugin
```

This plugin replaces the name import effector with the effector-logger

## Setting
`.babelrc`  

true way include  

```
{
  "env": {
    "dev": {
      "plugins": [ "effector-logger" ]
    }
    "production": {
      "plugins": [ // don't including this here effector logger plugin ]
    }
  }
}
```

alternative way  

```
{
  "plugins": [
    ["effector-logger", { off: false | true }]
  ]
}
```
