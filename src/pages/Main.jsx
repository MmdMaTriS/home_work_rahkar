import Aside from "../layouts/Aside";
import { PieChart } from "react-minimal-pie-chart";
import { Stack } from "@mui/system";

import styles from "../assets/styles/main.module.scss";
import { useState } from "react";
import {
  Button,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography
} from "@mui/material";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import { fetchGetUserLists } from "../services";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserList } from "../store/reducers/userSlice";
import { isEmpty } from "lodash";
import BasicModal from "../components/Modal";
import SelectBox from "../components/SelectBox";
import appIcons from "../utils/appIcons";
import { checkEmail, checkName } from "../utils/verifyTools";
const FAKE_USER_AVATAR_URL = [
  { title: "User Profile", href: "/main" },
  { title: "Settings", href: "/main" },
  { title: "Log out", href: "/main" }
];

const FORM_BUTTONS = [
  { title: "General", id: 0 },
  { title: "Relations", id: 1 },
  { title: "Address", id: 2 }
];

const GENDER_LIST = [
  { title: "Male", value: "m" },
  { title: "Female", value: "f" },
  { title: "Other", value: "o" }
];
export default function Main() {
  const dispatch = useDispatch();
  const userListReducer = useSelector((state) => state.userReducer);

  //##
  const [anchorElMenu, setAnchorElMenu] = useState({});
  const [disableButton, setDisableButton] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [buttonSelectedForm, setButtonSelectedForm] = useState(0);
  const [addressCounte, setAddressCount] = useState(1);
  //#
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    gender: "",
    desc: ""
  });
  const handleOpenHeaderMenu = (e, id) => {
    let Obj = {};
    Obj[id] = e.currentTarget;
    setAnchorElMenu(Obj);
  };
  const handleOpenModalForm = () => {
    setOpenFormModal(true);
  };
  const handleGetUserList = async () => {
    setDisableButton(true);
    try {
      const { data } = await fetchGetUserLists();
      if (data) {
        const UpdateList = data.data.map((ctx, idx) => {
          return { ...ctx, status: idx % 2 ? "Verify" : "Not Verify" };
        });
        dispatch(toggleUserList(UpdateList));
      }
    } catch (ex) {
      toast.error("Error While Updating...");
    } finally {
      setDisableButton(false);
    }
  };

  const handleAddAddress = () => {
    setAddressCount((prev) => prev + 1);
  };

  const handleChangeFormValue = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!checkName(formValues.name))
      return toast.error("Name is not acceptable");
    if (!checkEmail(formValues.email)) return toast.error("Email not valid");
    alert("Fetch Data");
  };
  return (
    <Aside>
      <Stack className={styles.profile_container}>
        <Stack className={styles.button}>
          <Button
            variant="contained"
            onClick={handleGetUserList}
            disabled={disableButton}
          >
            Person
          </Button>
        </Stack>
        <Stack
          className={styles.avatar}
          variant="contained"
          onClick={handleOpenHeaderMenu}
          id="profile"
        >
          <img src={`https://reqres.in/img/faces/5-image.jpg`} alt="avatar" />
        </Stack>
      </Stack>
      {/** Fake_CHART */}
      <Stack width="200px" marginX={3}>
        <Typography component="h2" textAlign="center">
          Pie Chart
        </Typography>
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" }
          ]}
        />
      </Stack>
      {/** Fake_CHART */}
      {!isEmpty(userListReducer.usersList) && (
        <Stack marginX={3}>
          <Stack mt={2} mb={1} width="200px">
            <Button
              variant="contained"
              color="success"
              onClick={handleOpenModalForm}
            >
              New
            </Button>
          </Stack>
          <table className={styles.table}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
            {userListReducer.usersList.map((ctx, idx) => {
              return (
                <tr key={idx}>
                  <td>{ctx.id}</td>
                  <td>{ctx.first_name + " " + ctx.last_name}</td>
                  <td>{ctx.email}</td>
                  <td>{ctx.status}</td>
                </tr>
              );
            })}
          </table>
        </Stack>
      )}

      {/** Menu For Avatar */}
      <Menu anchorEl={anchorElMenu} setAnchorEl={setAnchorElMenu}>
        {FAKE_USER_AVATAR_URL.map((ctx, idx) => {
          return (
            <MenuItem sx={{ marginBottom: "5px" }} key={idx}>
              <Link to={ctx.href}>
                <Typography
                  sx={{
                    fontSize: "15.5px",
                    minWidth: "130px"
                  }}
                  component="p"
                >
                  {ctx.title}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
      {/** Menu For Avatar */}

      {/** Modal For Form */}
      <BasicModal open={openFormModal} setOpen={setOpenFormModal}>
        <Stack direction="row" className={styles.fields_header}>
          {FORM_BUTTONS.map((c, i) => {
            return (
              <Button
                variant="contained"
                fullWidth
                key={i}
                size="large"
                data-active={buttonSelectedForm === c.id}
                onClick={() => setButtonSelectedForm(c.id)}
              >
                {c.title}
              </Button>
            );
          })}
        </Stack>
        <Stack className={styles.main_modal}>
          {buttonSelectedForm === 0 ? (
            <Stack>
              <Stack mb={2}>
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChangeFormValue}
                  inputProps={{ pattern: "[a-z]" }}
                />
              </Stack>
              <Stack mb={2}>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChangeFormValue}
                />
              </Stack>
              <Stack mb={2}>
                <SelectBox
                  list={GENDER_LIST}
                  name="gender"
                  label="Gender"
                  value={formValues.gender}
                  onChange={handleChangeFormValue}
                />
              </Stack>
              <Stack mb={2}>
                <TextareaAutosize
                  placeholder="Description"
                  minRows={5}
                  name="desc"
                  value={formValues.desc}
                  onChange={handleChangeFormValue}
                />
              </Stack>
            </Stack>
          ) : buttonSelectedForm === 1 ? (
            <Stack></Stack>
          ) : (
            <Stack>
              {Array.from(Array(addressCounte)).map((c, i) => {
                return (
                  <Stack marginY={1} key={i}>
                    <TextField
                      label={`Address No ${++i}`}
                      name={`address${i}`}
                      value={formValues["address" + i]}
                      onChange={handleChangeFormValue}
                    />
                  </Stack>
                );
              })}
              <Stack className={styles.plus_icon} onClick={handleAddAddress}>
                {appIcons("plusIcon")}
              </Stack>
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          )}
        </Stack>
      </BasicModal>
    </Aside>
  );
}
