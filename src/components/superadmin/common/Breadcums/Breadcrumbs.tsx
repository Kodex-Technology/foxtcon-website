"use client";
import React from "react";

interface BreadcrumbsProps {
  pathname: string;
}

const formatTitle = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pathname }) => {
  const segments = pathname?.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1] || "Dashboard";
  const title = formatTitle(currentPage);
  const routes = title;

  return (
    <div className="breadcums-wrapper">
      <h2 className="title">{title}</h2>
      <p className="routes">{routes}</p>
    </div>
  );
};

export default Breadcrumbs;
