import "./globals.css";
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: "SmartContainer Risk Engine | AI-Powered Customs Risk Assessment",
  description: "AI/ML-based container shipment risk assessment system. Predicts risk scores, detects anomalies, and provides explainable risk categorization for customs operations.",
  keywords: "container risk, customs, AI, machine learning, anomaly detection, trade compliance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
