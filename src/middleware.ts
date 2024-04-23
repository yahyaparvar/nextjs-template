import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "./i18n";
type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>;
const customMiddleware: CustomMiddleware = async (req) => {
  console.log("Custom middleware executed before next-intl");
  return req;
};

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
  await customMiddleware(req);
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
