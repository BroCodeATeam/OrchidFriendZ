import React from "react";
import { IconButton } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function MyOrchids() {
  return (
    <>
      <div className='flex w-max gap-4 mt-4'>
        <Button variant='filled'>filled</Button>
        <Button variant='gradient'>gradient</Button>
        <Button variant='outlined'>outlined</Button>
        <Button variant='text'>text</Button>
      </div>
      <div className='flex w-max gap-4 mt-4'>
        <Button size='sm'>small</Button>
        <Button size='md'>medium</Button>
        <Button size='lg'>large</Button>
      </div>
      <div className='flex w-max gap-4 mt-4'>
        <Button color='blue'>color blue</Button>
        <Button color='red'>color red</Button>
        <Button color='green'>color green</Button>
        <Button color='amber'>color amber</Button>
      </div>
      <div className='flex w-max gap-4 mt-4'>
        <Button fullWidth>Full Width Button</Button>
      </div>
      <div className='flex w-max gap-4 mt-4'>
        <Button ripple={true}>Ripple Effect On</Button>
        <Button ripple={false}>Ripple Effect Off</Button>
      </div>
    </>
  );
}

export default MyOrchids;
