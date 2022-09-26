import React from 'react';
function Foo () {
  return <section style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfcaoX-ZShhsbJDXGKS0jX2AiX1km2BRtkXJERIOBNQWuHxNw/viewform?embedded=true"
      frameborder="0" marginheight="0" marginwidth="0" height="600" width="650" style={{height: '1000px', margin: 'auto'}}
      >載入中…
      </iframe>
  </section>;
}

export default Foo;