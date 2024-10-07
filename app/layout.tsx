
import './globals.css';
import React from 'react';

export const metadata = {
  title: "TYLER'S HOME FINDS - Waitlist",
  description:
    'Join the waitlist for TYLERS HOME FINDS - your new home decor destination!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
