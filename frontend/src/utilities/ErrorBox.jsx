import { useState, Fragment, useEffect } from 'react';
import { Alert, Button } from '@material-tailwind/react';

export default function Colors({ message }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message !== null) {
      setShow(true);
    }
  }, [message]);

  return (
    <Fragment>
      {!show && (
        <Button variant='gradient' className='absolute' onClick={() => setShow(true)}>
          Error!
        </Button>
      )}
      <Alert
        show={show}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {message}
      </Alert>
    </Fragment>
  );
}
