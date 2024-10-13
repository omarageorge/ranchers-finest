import DisplayPermit from '@/components/display-permits';
import { Metadata } from 'next';
import {
  essentialCertificates,
  otherCertificates,
  unbsPermits,
} from './images';

export const metadata: Metadata = {
  title: 'Certifications and Permits',
  keywords:
    'Ranchers Finest Certificates, Ranchers Finest Certifications,Ranchers Finest UNBS, Ranchers Finest UNBS Permits, Ranchers Finest ISO Certificate, Ranchers Finest Halaal',
  description:
    'Ranchers Finest has been awarded the ISO, UNBS, and Halaal certifications.  oUR Premises has also been approved by the Directorate of Public health & Environment',
};

export default function Certificates() {
  return (
    <main className='w-full h-auto'>
      <div className='w-full px-8 py-20 space-y-14 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto'>
        <DisplayPermit
          label='Certificates'
          assets={essentialCertificates}
          border
        />
        <DisplayPermit label='UNBS Permits' assets={unbsPermits} />
        <DisplayPermit label='ISO Certificate' assets={otherCertificates} />
      </div>
    </main>
  );
}
