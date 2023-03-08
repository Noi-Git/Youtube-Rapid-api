import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleIcon from '@mui/icons-material'
import {
  demoThumbnailUrl,
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
    <Card>
      {/* inside of <Link> if viedo exist pass the following to the url parameter /video/${videoId} */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
    </Card>
  )
}

export default VideosCard
