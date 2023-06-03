"use client"

import * as React from 'react';
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack';

export default function Skeletonvariant() {
  return (
    <Stack spacing={1}>
     
      <Skeleton variant="rounded" height={240} className="w-full rounded-lg " />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      

    </Stack>
  );
}