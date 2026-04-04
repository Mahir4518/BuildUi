import { redirect } from 'next/navigation';

export default function Dashboard() {
  // Your dashboard components actually live on your home page (/)
  // This smoothly redirects the /dashboard URL route directly to your home dashboard.
  redirect('/');
}
