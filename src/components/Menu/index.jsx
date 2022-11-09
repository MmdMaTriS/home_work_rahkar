import * as React from "react";
import Menu from "@mui/material/Menu";

import styles from "./Menu.module.scss"
function MenuSaz(props) {
  const open = Boolean(props.anchorEl[props.id]);
  const handleClose = () => {
    props.setAnchorEl({});
  };
  return (
    <Menu
      anchorEl={props.anchorEl[props.id]}
      id={props.id}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      className={styles.menu_container}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "#fff",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {props.children}
    </Menu>
  );
}
export default React.memo(MenuSaz);
