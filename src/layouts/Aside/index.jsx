import { Collapse } from "@mui/material";
import { Stack } from "@mui/system";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import appIcons from "../../utils/appIcons";

import styles from "./Aside.module.scss";
import { fake_aside_menu } from "./fake_aside_routes";
export default function Aside({ children }) {
  const location = useLocation();
  const [activeSubmenu, setActiceSubmenu] = useState("");
  /* Aside - Layout */
  const handleOpenSubMenu = (id) => {
    setActiceSubmenu((prev) => (prev !== id ? id : ""));
  };
  const Menu = useMemo(() => {
    return (
      <div className={styles.aside_container}>
        <ul className={styles.list_container}>
          {fake_aside_menu.map((ctx, idx) => {
            let hasChild = ctx.hasOwnProperty("children");
            return (
              <li className={styles.list_item} key={idx}>
                <div
                  className={styles.list_basic}
                  data-active={activeSubmenu === ctx.id}
                  onClick={hasChild ? () => handleOpenSubMenu(ctx.id) : null}
                >
                  <span className={styles.icon}>{appIcons(ctx.icon)}</span>
                  {ctx.title}
                  {hasChild && (
                    <span
                      className={styles.arrow}
                      data-active={activeSubmenu === ctx.id}
                    >
                      {appIcons("arrowRightIcon")}
                    </span>
                  )}
                </div>
                {hasChild && (
                  <ul className={styles.sub_container}>
                    {ctx.children.map((sub, subid) => {
                      return (
                        <Collapse in={activeSubmenu === ctx.id} key={subid}>
                          <li className={styles.sub_list}>
                            <span className={styles.icon}>
                              {appIcons(sub.icon, { fontSize: "inherit" })}
                            </span>
                            {sub.title}
                          </li>
                        </Collapse>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className={styles.aside_footer}>
          Copyright&copy;2022 <span>BehinRahkar</span>
        </div>
      </div>
    );
  }, [location, activeSubmenu]);
  /* Aside - Layout */
  return (
    <Stack className={styles.container}>
      <Stack component="aside">{Menu}</Stack>
      <Stack width={1}>{children}</Stack>
    </Stack>
  );
}
