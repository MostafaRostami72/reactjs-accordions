# reactjs-accordions

> A useful and simple package to create an react accordion.

[![NPM](https://img.shields.io/npm/v/reactjs-accordions.svg)](https://www.npmjs.com/package/reactjs-accordions) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Full Document
-   [Document](https://mostafarostami72.github.io/reactjs-accordions/)
## Demo
-   [Demo](https://mostafarostami72.github.io/reactjs-accordions/)


## Install

```bash
npm install --save reactjs-accordions
```

## Usage

```jsx
import React from 'react'

import Accordions from 'reactjs-accordions';
import 'reactjs-accordions/dist/index.css';

const Example = () => {

    const items = [
        {title: 'Accordion title 1', caption: 'Accordion content 1'},
        {title: 'Accordion title 2', caption: 'Accordion content 2'},
        {title: 'Accordion title 3', caption: 'Accordion content 3'},
        {title: 'Accordion title 4', caption: 'Accordion content 4'},
    ];

    return (
        <div className="border px-3 rounded-lg">
             <Accordions
                 items={items}
                 className=""
             />
        </div>
    );
};

export default Example;
```


## Support
We are glad you choose this package. If this package is useful for you, please give us a star.

## License

MIT © [MostafaRostami72](https://github.com/MostafaRostami72)
