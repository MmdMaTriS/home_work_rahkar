import { Collapse } from "@mui/material";
import { Stack } from "@mui/system";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Aside.module.scss";
import { fake_aside_menu } from "./fake_aside_routes";
export default function Aside({ children }) {
  const location = useLocation();
  const Menu = useMemo(() => {
    return (
      <div className={styles.aside_container}>
        <ul className={styles.list_container}>
          {fake_aside_menu.map((ctx, idx) => {
            let hasChild = ctx.hasOwnProperty("children");
            return (
              <li className={styles.list_item}>
                <div className={styles.list_basic}>
                  <span className={styles.icon}>Icon</span>
                  {ctx.title}
                  {hasChild && <span className={styles.arrow}>/>/</span>}
                </div>
                {hasChild && (
                  <ul className={styles.sub_container}>
                    {ctx.children.map((sub) => {
                      return (
                        <Collapse>
                          <li className={styles.sub_list}>
                            <span className={styles.icon}>Icon</span>
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
  }, [location]);
  return (
    <Stack className={styles.container}>
      <Stack component="aside">{Menu}</Stack>
      <Stack>{children}</Stack>
    </Stack>
  );
}
