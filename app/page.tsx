'use client';
import WaitlistForm from '@/components/WaitlistForm';
import './globals.css'; // Assuming global CSS import

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden font-sans bg-gray-100">
      {/* Include the rest of your JSX here */}
      <WaitlistForm />
    </main>
  );
}
