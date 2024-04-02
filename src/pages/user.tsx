// pages/user.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const UserPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">User Page</h1>
        {name ? (
          <p>Welcome, {name}!</p>
        ) : (
          <p>Welcome, Guest!</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
