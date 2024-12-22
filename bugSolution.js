```javascript
// Correct usage of $inc and $setOnInsert operators
db.collection('counters').updateOne({ _id: 'myCounter' }, {
  $setOnInsert: { sequence: 0 },
  $inc: { sequence: -1 }
});
```