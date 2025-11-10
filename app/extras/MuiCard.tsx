import { WidthFull } from "@mui/icons-material";
import { Box , Card, CardContent, Typography, CardActions, Button, CardMedia, CardActionArea} from "@mui/material"

const cards = [
  {
    id: 1,
    title: 'Plants',
    description: 'Plants are essential for all life. They produce oxygen, provide food, and offer habitat for countless organisms.',
  },
  {
    id: 2,
    title: 'Animals',
    description: 'Animals are a part of nature. and they play a crucial role in maintaining ecological balance.',
  },
  {
    id: 3,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival. We must work to protect and preserve our natural world.',
  },
];

const MuiCard = () => {
  return (
     <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(250px, 100%), 1fr))',
        gap: 3 }}>

        {cards.map((card) => (
            <Card elevation={3} sx={{transition : 'transform 0.2s, box-shadow 0.3s', 
                 '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                 },
            }}>
                <CardActionArea sx={
                    { height: '100%', '&:hover':{backgroundColor: 'success.light'}}}>
                     <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=400"
                    alt="plants"
                    />
                    <CardContent >
                        <Typography variant="h5">{card.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary">Learn More</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        ))}

        {/* <Card sx={{ maxWidth: 345, marginBottom: '1rem' }}>
            <CardMedia 
            component='img'
            height='140px'
            image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469"
            alt="unsplash image"
            ></CardMedia>
            <CardContent>
                <Typography variant="h5" component={'div'}>
                    ReacT
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                    React is a JavaScript library for building user interfaces.it is maintained
                     by Facebook and a community of individual developers and companies.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small" color="success">Share</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, marginBottom: '1rem' }}>
            <CardMedia 
            component='img'
            height='140px'
            image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469"
            alt="unsplash image"
            ></CardMedia>
            <CardContent>
                <Typography variant="h5" component={'div'}>
                    ReacT
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                    React is a JavaScript library for building user interfaces.it is maintained
                     by Facebook and a community of individual developers and companies.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small" color="success">Share</Button>
            </CardActions>
        </Card> */}
        </Box>
  )
}

export default MuiCard


// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// export default function MuiCard() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             component="div"
//             sx={{ color: 'text.secondary' }}
//           >
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
//         alt="Live from space album cover"
//       />
//     </Card>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';

// const cards = [
//   {
//     id: 1,
//     title: 'Plants',
//     description: 'Plants are essential for all life.',
//   },
//   {
//     id: 2,
//     title: 'Animals',
//     description: 'Animals are a part of nature.',
//   },
//   {
//     id: 3,
//     title: 'Humans',
//     description: 'Humans depend on plants and animals for survival.',
//   },
// ];

// export default function MuiCard() {
// //   const [selectedCard, setSelectedCard] = React.useState(0);
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
//         gap: 2,
//       }}
//     >
//       {cards.map((card, index) => (
//         <Card>
//           <CardActionArea
//             // onClick={() => setSelectedCard(index)}
//             // data-active={selectedCard === index ? '' : undefined}
//             sx={{
//               height: '100%',
//               '&[data-active]': {
//                 backgroundColor: 'action.selected',
//                 '&:hover': {
//                   backgroundColor: 'action.selectedHover',
//                 },
//               },
//             }}
//           >
//             <CardContent sx={{ height: '100%' }}>
//               <Typography variant="h5" component="div">
//                 {card.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {card.description}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ))}
//     </Box>
//   );
// }


