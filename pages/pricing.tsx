import PricingPage from '@/components/ui/organisms/PricingPage';
import HomeLayout from '@/layouts/HomeLayout';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function Pricing() {
    return (
        <HomeLayout>
            <MetaTag title="pricing" description="" url="/pricing" />
            <PricingPage />
        </HomeLayout>
    )
}