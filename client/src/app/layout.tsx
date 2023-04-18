import TabBar from "@/components/tabbar";
import { Providers } from "./providers";

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <TabBar/>
        </Providers>
      </body>
    </html>
  )
}
