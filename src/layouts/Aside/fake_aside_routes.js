export const fake_aside_menu = [
  {
    title: "Dashboard",
    id: "dashboard",
    href: "/dashboard",
    icon: "gridIcon"
  },
  {
    title: "Management",
    id: "management",
    href: "/management",
    icon: "manageIcon",
    children: [
      {
        title: "Delete User",
        id: "delete",
        href: "/delete-user",
        icon: "deleteIcon"
      },
      { title: "Ban User", id: "ban", href: "/ban-user", icon: "banIcon" },
      {
        title: "Create User",
        id: "delete",
        href: "/create-user",
        icon: "createIcon"
      }
    ]
  },
  {
    title: "Admin System",
    id: "admin",
    href: "/admin",
    icon: "adminIcon"
  },
  {
    title: "Security",
    id: "sec",
    href: "/security",
    icon: "securityIcon",
    children: [
      {
        title: "Delete IP",
        id: "delete",
        href: "/delete-user",
        icon: "deleteIcon"
      },
      {
        title: "Change Password",
        id: "ban",
        href: "/ban-user",
        icon: "banIcon"
      },
      {
        title: "New List",
        id: "delete",
        href: "/create-user",
        icon: "createIcon"
      }
    ]
  },
  { title: "Newest Task", id: "task", href: "/tasks", icon: "taskIcon" },
  { title: "Recent Update", id: "update", href: "/update", icon: "updateIcon" }
];
