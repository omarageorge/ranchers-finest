import NavSpacer from '@/components/ui/nav-spacer';
import { Fragment } from 'react';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <NavSpacer />
      {children}
    </Fragment>
  );
}
