import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

import styles from "./Navbar.module.css";

export function Navbar(){
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Inicio",
            icon: <HomeIcon />,
        },
        {
            text: "Serviços",
            icon: <InfoIcon />,
        },
        {
            text: "Depoimentos",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "Profissionais",
            icon: <PeopleAltIcon />,
        },
        {
            text: "Contato",
            icon: <PhoneRoundedIcon />,
        },
    ];
    return (
        <nav className={styles.nav}>
            <div className={styles["navbar-links-container"]}>
                <a href="">Inicio</a>
                <a href="">Serviços</a>
                <a href="">Depoimentos</a>
                <a href="">Profissionais</a>
                <a href="">Contato</a>
            </div>
            <div className={styles["navbar-menu-container"]}>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                anchor="right"
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};
