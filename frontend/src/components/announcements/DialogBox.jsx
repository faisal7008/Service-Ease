import { Fragment, useState } from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';

export default function DialogBox() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button className='bg-teal-500 text-teal-50' onClick={handleOpen} variant='gradient'>
        Open Dialog
      </Button>
      <Dialog className='bg-gray-100 ' open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad reprehenderit omnis
          perspiciatis aut odit! Unde architecto perspiciatis, dolorum dolorem iure quia saepe autem
          accusamus eum praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
            <span>Cancel</span>
          </Button>
          <Button className='bg-rose-500' variant='gradient' color='green' onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
