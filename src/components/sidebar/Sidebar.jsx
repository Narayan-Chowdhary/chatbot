import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  ListItem,
  List,
  Box,
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

export default function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const navigation = useNavigate();

  const MenuList = [
    {
      name: "My ChatBots",
      icon: <HomeIcon />,
      link: "/allchatbots",
    },
    {
      name: "ChatLogs",
      icon: <ChatIcon />,
      link: "/chatbots",
    },
    {
      name: "Account",
      icon: <AccountBoxIcon />,
      link: "/account",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Box
        sx={{
          pb: 3,
          px: 4,
          mt: -4,
        }}
      >
        <img
          src=" "
          alt="Logo"
          title="Logo"
          height={50}
          width={150}
        />
      </Box>
      <List>
        {MenuList?.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigation(text.link)}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-around",
            [theme.breakpoints.up("xs")]: {
              justifyContent: "space-between",
            },
            [theme.breakpoints.up("sm")]: {
              justifyContent: "flex-end",
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: 2,
              display: { sm: "none" },
              color: "#64748b",
              border: "2px solid",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}
