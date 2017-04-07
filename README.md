# view-more-less [![Build Status](https://travis-ci.org/cynx/view-more-less.svg?branch=master)](https://travis-ci.org/cynx/view-more-less)   [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?text=Check%20out%20angular-view-more-less-directive!%20https://github.com/cynx/view-more-less)

A tiny AngularJS Directive to add view more less functionality to any list. No jQuery or external libaries overhead.



[Working Demo](https://plnkr.co/edit/ww67uU?p=info)

## Installation


#### NPM

```
npm install view-more-less
```
#### Bower

```
bower install angular-view-more-less
```

## Examples

`view-more-less` directive element should be added as last item in the `ul` you want to convert into view more / less. For example:

```
<ul>
    <li>item1<\li>
    <li>item2<\li>
    ...
    <view-more-less limit='1' show-more-text='Show More &#x25BC;' show-less-text='Show Less &#x25B2;' is-static=true></view-more-less>    
<\ul>
```

The text to be displayed on view more and view less links can be configured by `show-more-text` and `show-less-text` attributes.

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

#### Styling

The default styles for `li` and `btn` can be overriden by passing CSS properties as an object to `li-style` and `btn-style` attributes respectively.
```
$scope.btnStyle = {
    'color':'red',
    'font-size':'14px'
};
```
And in the template,
```
<view-more-less btn-style='btnStyle'></view-more-less> 
```

## LICENSE

ISC