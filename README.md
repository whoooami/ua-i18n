# auction-uni

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### switch langs
```
    this._i18n.locale = en-US;
```

#### switch theme
```
    this.$store.commit("SET_THEME", (parseInt(i.date)%2==0? 'dark': 'white'));
```