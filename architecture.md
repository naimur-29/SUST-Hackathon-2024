### Block Diagram

link: https://app.eraser.io/workspace/jHLRetqLx3YWpdxzwCEd

### Database Architecture

```javascript
const User = {
  uid: Number,
  name: String,
  university: String,
  languagePairs: Array[lids],
  lastThreePairs: Array[lids],
};

const LanguagePair = {
  lid: String,
  uid: Number,
  name: String,
  historyId: Number(hid),
};

const History = {
  hid: Number,
  content: Array(Histories),
};
```
