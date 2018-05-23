## Microstates Museum

There are many things that make Microstates unique, but the most important one
is that it uses the concept of _typed data_ to do most of the work for
you. What exactly does this mean?

Well, for example, the complete solution to React Museum is four lines of code:

```javascript
class ListModel {
  allItems = [String]
  newItemText = String
}
```

This defines a new type, `ListModel`, which is composed out of two
fields which in turn each have their own type. The `allItems` field
has a type of `[String]`, shorthand for `Array of String`, and the
`newItemText` has a type of `String`. And it turns out that this is
all the information we need!

Because if we know we have an array, then we know that we can "push"
things onto it, and pop things off of it. There's no need to handroll those
state transitions. They're implicit to the data type.


## Development

If you use yarn, run:
`yarn && yarn start`

If you use npm, run:
`npm i && npm run start`
