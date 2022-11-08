import { Button, Divider, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../assets/styles/login.module.scss";
import { fetchUserAccount } from "../services";
import { toggleUserAccessToken } from "../store/reducers/userSlice";
import { checkEmail } from "../utils/verifyTools";

export default function Login(params) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [disableButton, setDisableButton] = useState(false);
  const handleLoginUser = async (e) => {
    e.preventDefault();
    const email = formState.email;
    const password = formState.password;
    if (!checkEmail(email)) return toast.error("Email is not valid");
    try {
      setDisableButton(true);
      const { data } = await fetchUserAccount({ email, password });
      if (data.hasOwnProperty("token")) {
        dispatch(toggleUserAccessToken(data.token));
        Cookies.set("AccessToken", data.token);
        navigate("/main");
      }
    } catch (ex) {
      toast.error(ex.response.data.error);
    } finally {
      setDisableButton(false);
    }
  };
  const handleUpdateFormState = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container className={styles.login_container}>
      <Stack className={styles.main}>
        <Typography component="h1">Login to Account</Typography>
        <Divider />
        <form onSubmit={handleLoginUser}>
          <Stack mb={2} mt={1.5}>
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={handleUpdateFormState}
              value={formState.email}
            />
          </Stack>
          <Stack mb={2}>
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={handleUpdateFormState}
              value={formState.password}
            />
          </Stack>
          <Button type="submit" variant="contained" disabled={disableButton}>
            Login
          </Button>
        </form>
      </Stack>
    </Container>
  );
}
