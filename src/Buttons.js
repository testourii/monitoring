import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Date from './Date'
import Stack from '@mui/material/Stack';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
export default function Buttons({isDB,urlDB,UrlMemory,urlProcessor,setFrom,setUntil,from,until}) {

const image = 
{
  url: 'https://i.ibb.co/HGgVFgz/7xm-xyz949369.jpg',
  title: 'Memory usage',
  width: '50%',
  targetUrl:UrlMemory
},image2=
{
  url: 'https://i.ibb.co/3cvSMm1/7xm-xyz574867.jpg',
  title: 'Processor usage',
  width: '50%',
  targetUrl:urlProcessor
},
image3=
{
  url: 'https://istock.7xm.xyz/images/7xm.xyz349299.jpg',
  title: 'DataBase availability',
  width: '50%',
  targetUrl:urlDB
};


  return (
<><Box style={{ display: 'flex',alignItems:'center',justifyContent:'center', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
     <Date setFrom={setFrom} setUntil={setUntil} from={from} until={until} />
     </Box>
    <Stack direction="row" spacing={10} margin={5}>

   {!isDB ?(<><Box style={{ display: 'flex',alignItems:'center',justifyContent:'center', flexWrap: 'wrap', minWidth: 400, width: '100%' }}>
     <ImageButton
         onClick={() => openInNewTab(image.targetUrl)}
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        </Box>
    <Box style={{ display: 'flex',alignItems:'center',justifyContent:'center', flexWrap: 'wrap', minWidth: 400, width: '100%' }}>

        <ImageButton
         onClick={() => openInNewTab(image2.targetUrl)}

          focusRipple
          key={image2.title}
          style={{
            width: image2.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image2.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image2.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        </Box>
        </>):
        (<Box style={{ display: 'flex',alignItems:'center',justifyContent:'center', flexWrap: 'wrap', minWidth: 400, width: '100%' }}>
     <ImageButton
         onClick={() => openInNewTab(image3.targetUrl)}
          focusRipple
          key={image3.title}
          style={{
            width: image3.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image3.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image3.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        </Box>)}
    </Stack></>
     
    
  );
}
