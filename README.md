# Reduced Test Case for Using `node-sass-json-importer` with Vue Cli 3

## Setup Vue Cli 3 Project

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli

vue create vue-json-in-sass

# select pre-processors/sass option in cli

cd vue-json-in-sass

yarn serve

yarn add node-sass-json-importer
```

REFERENCES:

- [https://cli.vuejs.org/](https://cli.vuejs.org/)
- [https://github.com/Updater/node-sass-json-importer](https://github.com/Updater/node-sass-json-importer)

## Create theme files

```bash
code src/assets/themes.json
```

```json
{
  "default": {
    "bg-color": "white",
    "text-color": "black",
    "trim-color": "#9600FF"
  },
  "dark": {
    "bg-color": "black",
    "text-color": "white",
    "trim-color": "limegreen"
  }
}
```

```bash
code src/assets/css/theme.scss
```

```scss
@import '../themes.json';

.hello {
  background: map-get($dark, 'bg-color');
  color: map-get($dark, 'text-color');
}
```

```vue
<!-- src/components/HelloWorld.vue -->
<style scoped lang="scss">
@import '../assets/css/theme.scss';
</style>
```

REFERENCES:

- [https://github.com/Updater/node-sass-json-importer](https://github.com/Updater/node-sass-json-importer)
- [https://github.com/vigetlabs/sass-json-vars](https://github.com/vigetlabs/sass-json-vars)

## Extend Wepback with `vue.config.js`

```bash
code vue.config.js
```

```js
const jsonImporter = require('node-sass-json-importer');

module.exports = {
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
        importLoaders: 1
      },
      sass: {
        // options here will be passed to sass-loader
        importer: jsonImporter
      }
    }
  }
};
```

REFERENCES:

- [https://cli.vuejs.org/guide/webpack.html#simple-configuration](https://cli.vuejs.org/guide/webpack.html#simple-configuration)
- [https://cli.vuejs.org/config/#css-extract](https://cli.vuejs.org/config/#css-extract)
