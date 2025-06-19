import {
  DashboardIcon,
  OrganizationIcon,
  InboxIcon,
  SubscriptionPlanIcon,
  PrivacyIcon,
  TermConditionIcon,
} from "@/svgs";
export const menuItems = [
  {
    label: "Dashboard",
    path: "/superadmin/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Organization",
    path: "/superadmin/organization",
    icon: OrganizationIcon,
  },
  {
    label: "Inbox",
    path: "/superadmin/chat",
    icon: InboxIcon,
  },
  {
    label: "Subscription plan",
    path: "/superadmin/subscription-plan",
    icon: SubscriptionPlanIcon,
  },
  {
    label: "Privacy Policy",
    path: "/superadmin/privacy-policy",
    icon: PrivacyIcon,
  },
  {
    label: "Terms and Conditions",
    path: "/superadmin/term-condition",
    icon: TermConditionIcon,
  },
];
