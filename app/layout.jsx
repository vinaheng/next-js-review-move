import './globals.css';
import Header from '@/Components/UI/Header';
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="flex justify-center">
                    <Header />
                    <div className="container fixed mt-16">{children}</div>
                </div>
            </body>
        </html>
    );
}
