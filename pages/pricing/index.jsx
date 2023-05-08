import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing  page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/pricing.jsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
