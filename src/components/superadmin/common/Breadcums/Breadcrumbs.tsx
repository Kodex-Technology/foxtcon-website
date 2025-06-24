"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const breadcrumbMap: Record<string, string> = {
  superadmin: "",
  dashboard: "Dashboard",
  organization: "Organization",
  add: "Add Organization",
};

const isDynamicSegment = (segment: string) =>
  /^\d+$/.test(segment) || /^[a-f0-9-]{6,}$/.test(segment);

// For breadcrumb route labels
const formatCrumbLabel = (segment: string, prev?: string): string => {
  const mapped = breadcrumbMap[segment];
  if (mapped !== undefined) return mapped;

  if (isDynamicSegment(segment)) {
    if (prev === "organization") return "View Organization";
    if (prev === "add") return "Add Organization";

    return "Details";
  }

  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

// For title at top
const formatTitleLabel = (segments: string[]): string => {
  const last = segments.at(-1);
  const prev = segments.at(-2);

  if (last === "edit") {
    if (prev === "privacy-policy") return "Privacy Policy";
    if (prev === "term-condition") return "Terms & Conditions";
  }

  if (segments.includes("organization") && isDynamicSegment(last!)) {
    return "Organization";
  }

  return formatCrumbLabel(last || "", prev);
};

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments
    .map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      const label = formatCrumbLabel(segment, segments[index - 1]);
      return { href, label };
    })
    .filter((crumb) => crumb.label?.trim());

  const title = formatTitleLabel(segments);

  return (
    <div className="breadcums-wrapper">
      <h2 className="title">{title || "Dashboard"}</h2>
      <p className="routes">
        {crumbs.map((crumb, idx) => (
          <span key={idx}>
            {idx !== crumbs.length - 1 ? (
              <>
                <Link href={crumb.href}>{crumb.label}</Link> {" > "}
              </>
            ) : (
              <span>{crumb.label}</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Breadcrumbs;
