import React, { useState } from 'react';

function ConditionalCompenent() {
  // eslint-disable-next-line no-unused-vars
  const [display, setDisplay] = useState(true);

  <h3>This is a Conditional Compenent</h3>;
  return display ? (
    <div>
      <h3>This is a Conditional Compenent</h3>
    </div>
  ) : (
    <div>
      <h3>nothing to see here</h3>
    </div>
  );
}

export default ConditionalCompenent;
