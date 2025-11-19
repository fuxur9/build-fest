"use client";

/**
 * SponsorCard Component
 * 
 * Displays a sponsor with logo, tier-based styling, and link
 */

import Image from "next/image";
import Link from "next/link";

export type SponsorTier = "first" | "second" | "third";

export interface Sponsor {
  name: string;
  logoUrl: string;
  logoAlt: string;
  websiteUrl: string;
  tier: SponsorTier;
  logoWidth?: number;
  logoHeight?: number;
  customBackgroundColor?: string; // For special styling like Strato VC
}

interface SponsorCardProps {
  sponsor: Sponsor;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  // Tier-based styling
  const tierStyles = {
    first: {
      container: "mb-12", // More spacing for first tier
      logoSize: { width: 500, height: 500 },
      scale: "hover:scale-110",
    },
    second: {
      container: "",
      logoSize: { width: 200, height: 200 },
      scale: "hover:scale-110",
    },
    third: {
      container: "",
      logoSize: { width: 150, height: 150 },
      scale: "hover:scale-105",
    },
  };

  const styles = tierStyles[sponsor.tier];
  const logoWidth = sponsor.logoWidth || styles.logoSize.width;
  const logoHeight = sponsor.logoHeight || styles.logoSize.height;

  // Special handling for sponsors with custom backgrounds (like Strato VC)
  if (sponsor.customBackgroundColor) {
    return (
      <div className={`flex flex-col items-center ${styles.container}`}>
        <Link
          href={sponsor.websiteUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={`transition-transform duration-300 ${styles.scale}`}
        >
          <div
            className='rounded-lg p-4'
            style={{ backgroundColor: sponsor.customBackgroundColor }}
          >
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.logoAlt}
              width={logoWidth}
              height={logoHeight}
              className='rounded-lg object-contain'
            />
            {sponsor.name === "Strato VC" && (
              <Image
                src='/stratovc.png'
                alt='Strato VC Text'
                width={200}
                height={60}
                className='object-contain mt-2'
              />
            )}
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={`flex justify-center items-center ${styles.container}`}>
      <Link
        href={sponsor.websiteUrl}
        target='_blank'
        rel='noopener noreferrer'
        className={`transition-transform duration-300 ${styles.scale}`}
      >
        <Image
          src={sponsor.logoUrl}
          alt={sponsor.logoAlt}
          width={logoWidth}
          height={logoHeight}
          className='object-contain'
        />
      </Link>
    </div>
  );
}

