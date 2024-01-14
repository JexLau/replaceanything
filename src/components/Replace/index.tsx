'use client'
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  src?: string;
}
export function Replace({ src }: Props) {
  return (
    <div style={{ width: '100%', height: '1300px', position: 'relative', zIndex: 1 }} className='lg:-top-72 sm:-top-96'>
      <iframe id="modelscope" src={src} height="1300px%" width="100%"></iframe>
    </div>
  );
}
