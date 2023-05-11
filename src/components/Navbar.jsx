import React, { useState, useEffect } from "react";
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
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import AnchorLink from "react-anchor-link-smooth-scroll";

import styles from "./Navbar.module.css";

export function Navbar() {
    const link = (item) => () => {
        window.location.href = item.link;
        setOpenMenu(false);
    };
    const [openMenu, setOpenMenu] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const menuOptions = [
        {
            text: "Inicio",
            icon: <HomeIcon />,
            link: "#home",
        },
        {
            text: "Serviços",
            icon: <InfoIcon />,
            link: "#services",
        },
        {
            text: "Horários",
            icon: <AccessTimeFilledIcon />,
            link: "#timetable",
        },
        {
            text: "Profissionais",
            icon: <PeopleAltIcon />,
            link: "#professionals",
        },
        {
            text: "Contato",
            icon: <PhoneRoundedIcon />,
            link: "#contact",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.pageYOffset > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.nav} ${isSticky ? styles.navFixed : ""}`}>
            <div className={styles["navbar-links-container"]}>
                <AnchorLink href="#home">Inicio</AnchorLink>
                <AnchorLink href="#services">Serviços</AnchorLink>
                <AnchorLink href="#timetable">Horários</AnchorLink>
                <AnchorLink href="#professionals">Profissionais</AnchorLink>
                <AnchorLink href="#contact">Contato</AnchorLink>
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
                                <ListItemButton onClick={link(item)}>
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
}
