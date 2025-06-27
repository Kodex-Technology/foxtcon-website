import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SuperAdminRoutes } from "./constant/appRoutes";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const protectedPaths = [
    SuperAdminRoutes.DASHBOARD,
    SuperAdminRoutes.ORGANIZATION,
    SuperAdminRoutes.ORGANIZATION_ADD,
    SuperAdminRoutes.ORGANIZATION_ADMIN,
    SuperAdminRoutes.ORGANIZATION_USER,
    SuperAdminRoutes.PRIVACY_POLICY,
    SuperAdminRoutes.PRIVACY_POLICY_EDIT,
    SuperAdminRoutes.SUBSCRIPTION_PLAN,
    SuperAdminRoutes.SUBSCRIPTION_PLAN_ADD,
    SuperAdminRoutes.CHAT,
  ];

  if (
    protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path)) &&
    !token
  ) {
    return NextResponse.redirect(new URL(SuperAdminRoutes.SIGNIN, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    `${SuperAdminRoutes.ORGANIZATION}/:path*`,
    `${SuperAdminRoutes.PRIVACY_POLICY}/:path*`,
    `${SuperAdminRoutes.TERM_CONDITION}/:path*`,
    `${SuperAdminRoutes.SUBSCRIPTION_PLAN}/:path*`,
  ],
};
