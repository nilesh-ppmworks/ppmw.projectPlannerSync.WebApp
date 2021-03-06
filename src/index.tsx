import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { mergeStyles } from 'office-ui-fabric-react';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      
    }
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(< DetailsListDocumentsExample/>, document.getElementById('app'));
