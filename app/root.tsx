import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import ThemeProvider from "@primer/react/lib-esm/ThemeProvider";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <h1>Hello world!</h1>
          <Outlet />

          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}
