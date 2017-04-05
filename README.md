# view-more-less [![Build Status](https://travis-ci.org/cynx/view-more-less.svg?branch=master)](https://travis-ci.org/cynx/view-more-less)   [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?text=Check%20out%20angular-view-more-less-directive!%20https://github.com/cynx/view-more-less)

A tiny AngularJS Directive to add view more less functionality to any list



[Working Demo](https://plnkr.co/edit/ww67uU?p=info)

## Installation


#### NPM

```
npm install view-more-less
```
#### Bower

```
bower install view-more-less
```

## Examples

#### Static List

For static list `is-static` attribute should be set to true. `list` attribute is not required.
```
<view-more-less limit='3' show-more-text='Show More &#x25BC;' show-less-text='Show Less &#x25B2;' is-static=true></view-more-less>    

```

#### Deferred List

For Deferred list `is-static` attribute is not required. List array should be passed to `list` attribute.
```
<view-more-less limit='4' show-more-text='Show More &#x25BC;' show-less-text='Show Less &#x25B2;' list='deferredList'></view-more-less>    

```

## LICENSE

ISC




