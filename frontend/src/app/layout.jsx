import './globals.css';

export const metadata = {
  title: 'SmartContainer Risk Engine',
  description: 'AI/ML-based container shipment risk assessment system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
