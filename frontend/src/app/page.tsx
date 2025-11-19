"use client";

/**
 * Home Page Component
 *
 * Main landing page for Badger Build Fest 2025 event.
 * Displays event information, sponsors, tracks, schedule, and registration links.
 */

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PartnerOrganizationCard from "@/components/PartnerOrganizationCard";
import SponsorCard from "@/components/SponsorCard";

export default function Home() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-background via-primary/10 to-background'>
      {/* ============================================
          HERO SECTION
          Main event title, registration CTA, and key event details
      ============================================ */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-8xl mx-auto text-center'>
          {/* Event Title */}
          <div className='mb-16'>
            <div className='flex items-center justify-center gap-8 mb-12'>
              <h1 className='text-6xl md:text-8xl lg:text-8xl font-bold text-foreground font-space-grotesk'>
                Badger Build Fest 2025
              </h1>
            </div>
          </div>

          {/* Primary Registration CTA Button */}
          <div className='flex justify-center mb-20'>
            <Button asChild size='lg' className='text-xl px-12 py-6'>
              <Link
                href='https://forms.gle/V41KWM2T9SjHj1cG9'
                target='_blank'
                rel='noopener noreferrer'
              >
                Register Now
                <ArrowRight className='ml-2 w-6 h-6' />
              </Link>
            </Button>
          </div>

          {/* Event Details Cards: Location and Date */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {/* Location Card */}
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-4 text-center'>
                <MapPin className='w-12 h-12 text-primary mx-auto mb-4' />
                <h3 className='text-2xl font-semibold text-card-foreground mb-2'>
                  Location
                </h3>
                <p className='text-xl text-muted-foreground'>
                  Morgridge Hall Basement Area
                </p>
              </CardContent>
            </Card>
            {/* Date Card */}
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-4 text-center'>
                <Calendar className='w-12 h-12 text-primary mx-auto mb-4' />
                <h3 className='text-2xl font-semibold text-card-foreground mb-2'>
                  Date
                </h3>
                <p className='text-xl text-muted-foreground'>
                  12:00 PM Nov 15 - 5:00 PM Nov 16
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          SPONSORS SECTION
          Displays event sponsors with clickable logos
      ============================================ */}
      <section id='sponsors' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Our Sponsors
            </h2>
          </div>

          {/* First Tier Sponsor: Cursor */}
          <SponsorCard
            sponsor={{
              name: "Cursor",
              logoUrl: "/cursor-text.png",
              logoAlt: "Cursor",
              websiteUrl: "https://cursor.com",
              tier: "first",
              logoWidth: 500,
              logoHeight: 500,
            }}
          />

          {/* Second Tier Sponsors */}
          <div className='flex flex-wrap justify-center items-center gap-12 mb-12'>
            <SponsorCard
              sponsor={{
                name: "College.xyz",
                logoUrl: "/college-xyz.png",
                logoAlt: "College.xyz",
                websiteUrl: "https://college.xyz",
                tier: "second",
              }}
            />
            <SponsorCard
              sponsor={{
                name: "Gemini",
                logoUrl: "/gemini.png",
                logoAlt: "Gemini",
                websiteUrl: "https://gemini.com",
                tier: "second",
              }}
            />
            <SponsorCard
              sponsor={{
                name: "Turtle.xyz",
                logoUrl: "/turtle-xyz-removebg-preview.png",
                logoAlt: "Turtle.xyz",
                websiteUrl: "https://turtle.xyz",
                tier: "second",
              }}
            />
          </div>

          {/* Second Tier Sponsors - Second Row */}
          <div className='flex flex-wrap justify-center items-center gap-12'>
            <SponsorCard
              sponsor={{
                name: "Kinetic Solutions",
                logoUrl: "/kinetic-long.png",
                logoAlt: "Kinetic Solutions",
                websiteUrl: "https://teamkinetic.net/",
                tier: "second",
              }}
            />
            <div className='flex flex-col items-center scale-[0.8] origin-center'>
              <SponsorCard
                sponsor={{
                  name: "Strato VC",
                  logoUrl: "/Stratologo.png",
                  logoAlt: "Strato VC",
                  websiteUrl: "https://stratovc.com/",
                  tier: "second",
                  customBackgroundColor: "rgb(2, 3, 38)",
                }}
              />
            </div>
            <SponsorCard
              sponsor={{
                name: "CNCF",
                logoUrl: "/CNCF-Picsart-BackgroundRemover.png",
                logoAlt: "CNCF",
                websiteUrl: "https://cncf.io",
                tier: "second",
              }}
            />
          </div>
        </div>
      </section>

      {/* ============================================
          HOST ORGANIZATIONS SECTION
          Displays the two main hosting organizations
      ============================================ */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
            Host Organizations
          </h2>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12'>
            {/* Tech Exploration Lab */}
            <div className='flex flex-col items-center text-center'>
              <Link
                href='https://techexplorationlab.wisc.edu/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/tech-exploration-lab.png'
                  alt='Tech Exploration Lab'
                  width={300}
                  height={300}
                  className='rounded-lg object-contain mb-3'
                />
              </Link>
              <span className='text-lg font-semibold text-foreground'>
                Tech Exploration Lab
              </span>
            </div>

            {/* Separator */}
            <span className='text-3xl font-bold text-primary'>×</span>

            {/* Badger Blockchain */}
            <div className='flex flex-col items-center text-center'>
              <Link
                href='https://www.instagram.com/badgerblockchain/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-transform hover:scale-105'
              >
                <Image
                  src='/badger-blockchain.png'
                  alt='Badger Blockchain'
                  width={500}
                  height={271}
                  className='rounded-lg object-contain mb-3'
                />
              </Link>
              <span className='text-lg font-semibold text-foreground'>
                Badger Blockchain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PARTNER ORGANIZATIONS SECTION
          Displays partner organizations supporting the event
      ============================================ */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
            Partner Organizations
          </h2>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12'>
            <PartnerOrganizationCard
              partner={{
                name: "Cursor at UW-Madison",
                logoUrl: "/CursorAtUWLogo-modified.png",
                logoAlt: "Cursor at UW-Madison",
                websiteUrl:
                  "https://linktr.ee/cursoruwmadison?utm_source=linktree_profile_share&ltsid=25570ce8-6567-4c7b-a28c-2bfd3de83f4f",
                logoWidth: 200,
                logoHeight: 200,
              }}
            />

            <PartnerOrganizationCard
              partner={{
                name: "Transcend UW",
                logoUrl: "/transcend.png",
                logoAlt: "Transcend UW",
                websiteUrl: "http://transcenduw.com/",
                logoWidth: 200,
                logoHeight: 200,
              }}
            />

            <PartnerOrganizationCard
              partner={{
                name: "White Paper Reading Club",
                logoUrl: "/wprc.jpeg",
                logoAlt: "White Paper Reading Club",
                websiteUrl: "https://www.thewhitepaperreading.club/",
                logoWidth: 200,
                logoHeight: 200,
              }}
            />
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT SECTION
          Event description and overview
      ============================================ */}
      <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              About Badger Build Fest
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-4'>
              Badger Build Fest is a 24-hour half-hackathon half
              pitch-competition where participants choose between Venture and
              Blockchain tracks to build the next big thing.
            </p>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-4'>
              Whether you&apos;re a developer, designer, entrepreneur, or just
              want to try yourself at something new, our event provides hands-on
              workshops, AI tools, and expert mentors to help you succeed.
            </p>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              From ideation to a polished pitch deck, you&apos;ll have access to
              everything needed to create a compelling demo and present your
              vision to experienced judges. Join us at Morgridge Hall for an
              intensive weekend of innovation, collaboration, and building the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          QUICK LINKS SECTION
          Links to detailed pages
      ============================================ */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Explore More
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors cursor-pointer group'>
              <Link href='/schedule'>
                <CardContent className='p-6 text-center'>
                  <h3 className='text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors'>
                    Schedule
                  </h3>
                  <p className='text-muted-foreground'>
                    View the complete event schedule
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors cursor-pointer group'>
              <Link href='/tracks'>
                <CardContent className='p-6 text-center'>
                  <h3 className='text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors'>
                    Tracks
                  </h3>
                  <p className='text-muted-foreground'>
                    Learn about Venture and Blockchain tracks
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors cursor-pointer group'>
              <Link href='/project-showcase'>
                <CardContent className='p-6 text-center'>
                  <h3 className='text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors'>
                    Showcase
                  </h3>
                  <p className='text-muted-foreground'>
                    Explore projects from participants
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          CALL-TO-ACTION SECTION
          Final registration and contact prompts
      ============================================ */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6 text-center'>
            Ready to Build the Future?
          </h2>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            {/* Primary CTA: Registration */}
            <Button size='lg' className='text-lg px-8 py-6' asChild>
              <Link
                href='https://forms.gle/V41KWM2T9SjHj1cG9'
                target='_blank'
                rel='noopener noreferrer'
              >
                Apply Now - Free!
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
            </Button>
            {/* Secondary CTA: Contact */}
            <Button
              variant='outline'
              size='lg'
              className='text-lg px-8 py-6'
              asChild
            >
              <Link
                href='https://discord.com/invite/ubAHakcM33.'
                target='_blank'
                rel='noopener noreferrer'
              >
                Contact TEL
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          Event information and organization links
      ============================================ */}
      <footer className='bg-muted/40 backdrop-blur-md border-t border-border py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center space-x-3 mb-4 md:mb-0'>
              <span className='text-lg font-bold text-foreground'>
                Badger Build Fest 2025
              </span>
              <span className='text-muted-foreground'>•</span>
              <Link
                href='https://techexplorationlab.wisc.edu/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-bold text-muted-foreground hover:text-foreground transition-colors underline'
              >
                Tech Exploration Lab
              </Link>
              <span className='text-muted-foreground'>•</span>
              <Link
                href='https://discord.com/invite/ubAHakcM33.'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-bold text-muted-foreground hover:text-foreground transition-colors underline'
              >
                TEL Discord Server (For any questions)
              </Link>
              <span className='text-muted-foreground'>•</span>
              <Link
                href='https://www.instagram.com/badgerblockchain/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-bold text-muted-foreground hover:text-foreground transition-colors underline'
              >
                Badger Blockchain
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
