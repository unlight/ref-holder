ref-holder
===
Friendly util function for holding reference to element for react-like frameworks

INSTALL
---
```
npm install --save ref-holder
```

USAGE
---
```tsx
import { refHolder } from 'ref-holder';

const inputElementHolder = refHolder<HTMLInputElement>();
render(<input type="text" name="name" value="jimbo" ref={inputElementHolder} />, document.body);
console.log(inputElementHolder.ref); // <input>
console.log(inputElementHolder.ref.value); // 'jimbo'
```

CHANGELOG
---
See [CHANGELOG.md](CHANGELOG.md)
