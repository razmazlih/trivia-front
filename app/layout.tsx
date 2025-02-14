import { PlayerProvider } from '@/contsxt/PlayerContext';
import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
          <body>
                <PlayerProvider>{children}</PlayerProvider>
          </body>
        </html>
    );
}
