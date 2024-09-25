import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
