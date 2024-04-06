import {auth} from "@/auth";
import {NextRequest, NextResponse} from "next/server";
import {i18nConfig} from "@/locale/config";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const PUBLIC_ROUTES = ["", "/", "/login", "/about", "/projects", "/done"];
const LOGIN = "login";

function getLocale(request: NextRequest) {
  const {locales, defaultLocale} = i18nConfig;
  let headers = { 'accept-language': defaultLocale }
  let languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale);
}

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const locale = getLocale(req);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname.replace(`/${locale}`, ''));
  const isOnLoginPage = nextUrl.pathname.includes(LOGIN);
  const pathnameIsMissingLocale = i18nConfig.locales.every(
      (locale) => !nextUrl.pathname.startsWith(`/${locale}/`) && nextUrl.pathname !== `/${locale}`
  )

  console.log({
    pathname: nextUrl.pathname,
    isAuthenticated,
    isPublicRoute,
    pathnameIsMissingLocale,
    locale
  })

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${locale}/${nextUrl.pathname}`, req.url));
  }

  if (!isAuthenticated && !isPublicRoute)
    return NextResponse.redirect(new URL(`/${LOGIN}`, req.url));

  if (isAuthenticated && isOnLoginPage)
    return NextResponse.redirect(new URL(`/${locale}/members`, req.url));

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
