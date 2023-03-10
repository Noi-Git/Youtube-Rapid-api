import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl } from '../utils/constants'

const ChannelCard = ({ channelDetail }) => {
  console.log('channelDetail:-- ', channelDetail)
  return (
    <Box
      sx={{
        boxSizing: 'borderBox',
        boxShadow: 'none',
        borderRadius: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { md: '315px', xs: '93vw' },
        height: '315px',
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={
              // channelDetail.snippet?.thumbnails?.default?.url ||
              demoThumbnailUrl
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          ></CardMedia>
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}{' '}
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && ( //show subscribe statistics on the profile page
            <Typography
              sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString('en-US')}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
export default ChannelCard
