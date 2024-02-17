### Block Diagram

link: https://app.eraser.io/workspace/jHLRetqLx3YWpdxzwCEd

### Database Architecture

```javascript
const User = {
  uid: Number,
  name: String,
  university: String,
};

const LanguagePair = {
  lid: String,
  uid: Number,
  name: String,
};

const History = {
  lid: Number,
  uid: Number,
  content: Array(Histories),
};
```
