import type { MetaFunction, LinkFunction, LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from './styles/global.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Chat en tiempo Real!!",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinkFunction = () => [
  { rel: "stylesheet" , href: styles }
];

export const loader = async ({}:LoaderArgs) => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!
  }

  return env 
}

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
