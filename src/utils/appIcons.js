import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GridViewIcon from "@mui/icons-material/GridView";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SecurityIcon from "@mui/icons-material/Security";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
export default function appIcons(name, props) {
  let icon = {
    arrowRightIcon: <KeyboardArrowRightIcon {...props} />,
    gridIcon: <GridViewIcon {...props} />,
    manageIcon: <ManageAccountsIcon {...props} />,
    adminIcon: <AdminPanelSettingsIcon {...props} />,
    securityIcon: <SecurityIcon {...props} />,
    taskIcon: <AssignmentOutlinedIcon {...props} />,
    updateIcon: <UpdateOutlinedIcon {...props} />,
    deleteIcon: <DeleteForeverOutlinedIcon {...props} />,
    banIcon: <NotInterestedOutlinedIcon {...props} />,
    createIcon: <CreateNewFolderOutlinedIcon {...props} />,
    plusIcon: <AddCircleOutlineIcon {...props} />
  }[name];
  return icon || "";
}
