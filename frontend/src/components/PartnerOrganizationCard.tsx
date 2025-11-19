"use client";

/**
 * PartnerOrganizationCard Component
 * 
 * Displays a partner organization with logo, name, and link
 */

import Image from "next/image";
import Link from "next/link";

export interface PartnerOrganization {
  name: string;
  logoUrl: string;
  logoAlt: string;
  websiteUrl: string;
  logoWidth?: number;
  logoHeight?: number;
}

interface PartnerOrganizationCardProps {
  partner: PartnerOrganization;
}

export default function PartnerOrganizationCard({
  partner,
}: PartnerOrganizationCardProps) {
  return (
    <div className='flex flex-col items-center text-center'>
      <Link
        href={partner.websiteUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='transition-transform hover:scale-105'
      >
        <Image
          src={partner.logoUrl}
          alt={partner.logoAlt}
          width={partner.logoWidth || 200}
          height={partner.logoHeight || 200}
          className='rounded-lg object-contain mb-3'
        />
      </Link>
      <span className='text-lg font-semibold text-foreground'>
        {partner.name}
      </span>
    </div>
  );
}

