
# to-element

  get a `Node` from `value`.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/to-element

## Example

```js
toElement(document.body);
toElement(dom('.baz'));
toElement($('.baz'));
toElement({ el: query('.baz') });
toElement('<div class=baz>');
toElement('.baz');
```

## API

#### toElement(value)

  get a `Node` from `value`.

## License

  MIT
