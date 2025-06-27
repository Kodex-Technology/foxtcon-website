import {
  FeatureClockIcon,
  FeatureScheduleIcon,
  FeatureCheckListIcon,
  FeatureTaskManagementIcon,
  FeatureChatIcon,
  FeatureDirectoryIcon,
  FeatureEventsIcon,
  FeatureKnowledgeIcon,
  FeatureTimeIcon,
  FeatureTrainingIcon,
  FeatureRewardIcon,
  FeatureDocumentIcon,
} from "@/svgs";

export const steps = [
  { label: "Organization Info" },
  { label: "Employees Info" },
  { label: "Business Industry" },
  { label: "Features" },
  { label: "Upload Logo" },
  { label: "Preview & Submit" },
];

export const industries = [
  {
    name: "Information",
    subIndustries: [
      "Information",
      "Telecommunications",
      "Media",
      "Publishing",
      "Other",
    ],
  },
  {
    name: "Finance",
    subIndustries: ["Banking", "Insurance", "Fintech"],
  },
  {
    name: "Healthcare",
    subIndustries: ["Hospitals", "Pharmaceuticals", "Medical Devices"],
  },
];

export const featuresList = [
  { key: "time_clock", label: "Time Clock", icon: FeatureClockIcon },
  { key: "schedule", label: "Schedule", icon: FeatureScheduleIcon },
  {
    key: "forms_checklists",
    label: "Forms & Checklists",
    icon: FeatureCheckListIcon,
  },
  {
    key: "task_management",
    label: "Task Management",
    icon: FeatureTaskManagementIcon,
  },
  { key: "chat_updates", label: "Chat & Updates", icon: FeatureChatIcon },
  { key: "directory", label: "Directory", icon: FeatureDirectoryIcon },
  { key: "events", label: "Events", icon: FeatureEventsIcon },
  {
    key: "knowledge_base",
    label: "Knowledge Base",
    icon: FeatureKnowledgeIcon,
  },
  { key: "time_off", label: "Time Off Management", icon: FeatureTimeIcon },
  {
    key: "training_onboarding",
    label: "Training & Onboarding",
    icon: FeatureTrainingIcon,
  },
  {
    key: "document_management",
    label: "Document Management",
    icon: FeatureDocumentIcon,
  },
  {
    key: "recognition_rewards",
    label: "Recognitions & Rewards",
    icon: FeatureRewardIcon,
  },
];

 export const plans = [
    {
      type: "basic",
      title: "Basic plan",
      description: "Start with a minimal offering. Use this plan to define basic level features for small teams or trial users"
    },
    {
      type: "standard",
      title: "Standard Plan",
      description: "Set up a balanced plan with moderate pricing and essential features. Best for most organizations"
    },
    {
      type: "premium",
      title: "Premium Plan",
      description: "Add advanced features and premium pricing here. Ideal for large-scale or high-priority clients."
    },
    {
      type: "custom",
      title: "Custom Plan",
      description: "Start with a minimal offering. Use this plan to define basic level features for small teams or trial users"
    }
  ];

