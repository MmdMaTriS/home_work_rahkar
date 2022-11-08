export const fake_aside_menu = [
  {
    title: "Dashboard",
    id: "dashboard",
    href: "/dashboard",
    icon: "FelanIcon"
  },
  {
    title: "Management",
    id: "dashboard",
    href: "/dashboard",
    icon: "FelanIcon",
    children: [
      { title: "Delete User", id: "delete", href: "/delete-user", icon: "" },
      { title: "Ban User", id: "ban", href: "/ban-user", icon: "" },
      { title: "Create User", id: "delete", href: "/create-user", icon: "" }
    ]
  },
  {
    title: "Admin System",
    id: "admin",
    href: "/admin",
    icon: "FelanIcon"
  },
  {
    title: "Security",
    id: "sec",
    href: "/security",
  },
  { title: "Newest Task", id: "task", href: "/tasks", icon: "FelanIcon" },
  { title: "Recent Update", id: "update", href: "/update", icon: "FelanIcon" },
];
