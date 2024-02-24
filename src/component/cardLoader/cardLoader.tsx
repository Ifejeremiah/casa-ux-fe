import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function Variants() {
  return (
    <Stack spacing={4}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton
        variant="rectangular"
        width={'185px'}
        height={'75px'}
        animation={'wave'}
      />
      {/*  */}
      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton variant="circular" width={40} height={40} /> */}
      <Skeleton
        variant="rectangular"
        width={'100%'}
        height={'102px'}
        animation={'wave'}
      />
      <div className="d-flex justify-content-between">
        <Skeleton
          variant="rectangular"
          width={'30%'}
          height={'50px'}
          animation={'wave'}
        />

        <Skeleton
          variant="rounded"
          width={'50px'}
          height={'50px'}
          animation={'wave'}
        />
      </div>
    </Stack>
  )
}
