import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material'
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CheckCircle } from '@mui/icons-material'
import {
  // demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants'

const VideosCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log('+++: ', video)
  // console.log('+--+: ', videoId, snippet)
  return (
    <Box
      sx={{
        boxSizing: 'borderBox',
        boxShadow: 'none',
        borderRadius: '0px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: { md: '315px', xs: '93vw' },
        height: '320px',
      }}
    >
      <Card
        sx={{
          width: { md: '320px', xs: '100%' },
          boxShadow: 'none',
          boarderRadius: '0px',
          height: '320px',
        }}
      >
        {/* inside of <Link> if viedo exist pass the following to the url parameter /video/${videoId} */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 'auto', height: 180 }}
          />
        </Link>
        <CardContent
          sx={{
            backgroundColor: '#1e1e1e',
            height: '106px',
          }}
        >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Box>
  )
}

export default VideosCard
