// /app/page.tsx

import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Items App</h1>
      <Link href="/items">Go to Items</Link>
    </div>
  );
};

export default HomePage;
