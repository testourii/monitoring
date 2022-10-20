import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import dayjs from 'dayjs';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Buttons from './Buttons'
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
const drawerWidth = 240;



export function SideBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [currentServer, setCurrentServer] = React.useState([296,"Cibo 01"]);
    const [from, setFrom] = React.useState(dayjs().subtract(12,"hour"));
    const [until, setUntil] = React.useState(dayjs());
    const [isDB, setIsDBToggle] = React.useState(false);
    const urlProcessor=`http://extlibrenms.mentz.net:8000/graphs/to=${until}/type=device_processor/from=${from}/lazy_w=845/device=${currentServer[0]}/`
    const UrlMemory=`http://extlibrenms.mentz.net:8000/graphs/to=${until}/type=device_mempool/from=${from}/lazy_w=845/device=${currentServer[0]}/`
    const urlDB=`http://extlibrenms.mentz.net:8000/graphs/device=${currentServer[0]}/type=device_availability/duration=86400/from=${from}/`
    const handleServer = (key,value) => {
        setCurrentServer([key,value])
        value.startsWith("Mongo") ? setIsDBToggle(true) :setIsDBToggle(false);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const cibo2name={
        296:"Cibo 01",
        297:"Cibo 02",
        298:"Cibo 03",
        299:"Cibo 04",
        300:"Cibo 11",
        301:"Cibo 12",
        302:"Cibo 13",
        303:"Cibo 14",
    };
    const mongo2name={
        306:"Mongo 01",
        305:"Mongo 01 replic2",
        309:"Mongo 11",
        307:"Mongo 11 replic1",
        308:"Mongo 11 replic2"
    };
    const shop2name={
        292:"Shop 01",
        293:"Shop 02",
        294:"Shop 03",
        295:"Shop 04",
        315:"Shop 11",
        316:"Shop 12",
        }  ;  
        const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {Object.entries(cibo2name).map(([key,value], index) => (
                    <ListItem onClick={e=>handleServer(key,value)} key={value} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                             <DnsIcon /> 
                            </ListItemIcon>
                            <ListItemText primary={value} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
            {Object.entries(mongo2name).map(([key,value], index) => (
                    <ListItem onClick={e=>handleServer(key,value)} key={value} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                             <StorageIcon /> 
                            </ListItemIcon>
                            <ListItemText primary={value} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
            {Object.entries(shop2name).map(([key,value], index) => (
                    <ListItem onClick={e=>handleServer(key,value)} key={value} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                             <DnsIcon /> 
                            </ListItemIcon>
                            <ListItemText primary={value} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Monitoring: {currentServer[1]}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                        <Buttons urlDB={urlDB} isDB={isDB} UrlMemory={UrlMemory} urlProcessor={urlProcessor} setFrom={setFrom} setUntil={setUntil} from={from} until={until} />
               
            </Box>
        </Box>
    );
}
