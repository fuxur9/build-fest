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
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-background via-primary/10 to-background'>
      {/* ============================================
          WORKSHOP BANNER
          Prominent banner for Badger Blockchain Workshop
      ============================================ */}
      <div className='fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-primary via-primary/95 to-primary text-white shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3'>
          <div className='text-center'>
            <p className='text-sm sm:text-base md:text-lg font-bold'>
              Check Out Badger Blockchain Workshop To Prepare for the Hackathon
              on Nov 13 (Thurs.) @Morgridge Hall Room. 2564 5:30 PM!
            </p>
          </div>
        </div>
      </div>

      {/* ============================================
          HERO SECTION
          Main event title, registration CTA, and key event details
      ============================================ */}
      <section className='pt-40 pb-20 px-4 sm:px-6 lg:px-8'>
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
                <p className='text-xl text-muted-foreground'>Morgridge Hall</p>
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

          {/* Primary Sponsor: Cursor (displayed separately, larger size) */}
          <div className='flex justify-center items-center mb-12'>
            <Link
              href='https://cursor.com'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110 duration-300'
            >
              <Image
                src='/cursor-text.png'
                alt='Cursor'
                width={500}
                height={500}
                className='object-contain'
              />
            </Link>
          </div>

          {/* Secondary Sponsors: Displayed in a flex wrap layout */}
          <div className='flex flex-wrap justify-center items-center gap-12'>
            <Link
              href='https://turtle.xyz'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110 duration-300'
            >
              <Image
                src='/turtle-xyz-removebg-preview.png'
                alt='Turtle.xyz'
                width={200}
                height={200}
                className='object-contain'
              />
            </Link>
            <Link
              href='https://college.xyz'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110 duration-300'
            >
              <Image
                src='/college-xyz.png'
                alt='College.xyz'
                width={200}
                height={200}
                className='object-contain'
              />
            </Link>
            <Link
              href='https://gemini.com'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110 duration-300'
            >
              <Image
                src='/gemini.png'
                alt='Gemini'
                width={200}
                height={200}
                className='object-contain'
              />
            </Link>

            <Link
              href='https://cncf.io'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110 duration-300'
            >
              <Image
                src='/CNCF-Picsart-BackgroundRemover.png'
                alt='CNCF'
                width={200}
                height={200}
                className='object-contain'
              />
            </Link>
            <Link
              href='https://teamkinetic.net/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110 duration-300'
            >
              <Image
                src='/kinetic-long.png'
                alt='Kinetic Solutions'
                width={200}
                height={200}
                className='object-contain'
              />
            </Link>
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
            {/* Cursor at UW-Madison */}
            <div className='flex flex-col items-center text-center'>
              <Link
                href='https://linktr.ee/cursoruwmadison?utm_source=linktree_profile_share&ltsid=25570ce8-6567-4c7b-a28c-2bfd3de83f4f'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-transform hover:scale-105'
              >
                <Image
                  src='/CursorAtUWLogo-modified.png'
                  alt='Cursor at UW-Madison'
                  width={200}
                  height={200}
                  className='rounded-lg object-contain mb-3'
                />
              </Link>
              <span className='text-lg font-semibold text-foreground'>
                Cursor at UW-Madison
              </span>
            </div>

            {/* Transcend UW */}
            <div className='flex flex-col items-center text-center'>
              <Link
                href='http://transcenduw.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-transform hover:scale-105'
              >
                <Image
                  src='/transcend.png'
                  alt='Transcend UW'
                  width={200}
                  height={200}
                  className='rounded-lg object-contain mb-3'
                />
              </Link>
              <span className='text-lg font-semibold text-foreground'>
                Transcend UW
              </span>
            </div>

            {/* White Paper Reading Club */}
            <div className='flex flex-col items-center text-center'>
              <Link
                href='https://www.thewhitepaperreading.club/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-transform hover:scale-105'
              >
                <Image
                  src='/wprc.jpeg'
                  alt='White Paper Reading Club'
                  width={200}
                  height={200}
                  className='rounded-lg object-contain mb-3'
                />
              </Link>
              <span className='text-lg font-semibold text-foreground'>
                White Paper Reading Club
              </span>
            </div>
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
          SCHEDULE SECTION
          Event schedule component (imported from Schedule.tsx)
      ============================================ */}
      <Schedule />

      {/* ============================================
          TRACKS SECTION
          Competition tracks: Venture and Blockchain
      ============================================ */}
      <section id='tracks' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Competition Tracks
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Choose your path and build something amazing in 24 hours
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* ============================================
                VENTURE TRACK CARD
                Focuses on MVP development and pitch presentation
            ============================================ */}
            <Card className='group relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <CardContent className='p-8'>
                {/* Track Header */}
                <div className='text-center mb-8'>
                  <h3 className='text-3xl font-bold text-card-foreground '>
                    Venture Track
                  </h3>
                  <p className='text-lg text-muted-foreground font-medium text-primary'>
                    - Brought to you by Cursor -
                  </p>

                  <p className='text-lg text-muted-foreground font-medium'>
                    - Build an MVP, demo it, and pitch its market fit -
                  </p>
                </div>

                {/* Visual Separator */}
                <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8'></div>

                {/* Track Details */}
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold text-card-foreground mb-2 text-lg'>
                      What You&apos;ll Build
                    </h4>
                    <p className='text-card-foreground leading-relaxed'>
                      This track is defined by startup-level speed, not coding
                      expertise. Your 24-hour challenge is to go from ideation
                      to a functional demo and a polished, investment-worthy
                      pitch deck.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-card-foreground mb-2 text-lg'>
                      Beginner-Friendly
                    </h4>
                    <p className='text-card-foreground leading-relaxed'>
                      You do not need to be an experienced programmer. Your
                      pitch, problem validation, and market-fit justification
                      will be weighted much more heavily than the technical
                      implementation.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-card-foreground mb-3 text-lg'>
                      Support & Resources
                    </h4>
                    <p className='text-card-foreground mb-3 leading-relaxed'>
                      To help you build a prototype you can use to showcase your
                      idea, you will have access to:
                    </p>
                    <ul className='text-card-foreground space-y-2 ml-4 leading-relaxed'>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary mt-1'>•</span>
                        <span>
                          Workshops on Figma, UI design and AI tools (like
                          Cursor) to help you build a prototype you can touch
                          and play with.
                        </span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary mt-1'>•</span>
                        <span>
                          On-site mentors, including experienced investors and
                          founders, to help guide your pitch deck and make sure
                          your vision is crystal clear.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-semibold text-card-foreground mb-2 text-lg'>
                      Judging Panel
                    </h4>
                    <p className='text-card-foreground leading-relaxed'>
                      The judges are experienced founders, VCs, and tech
                      leaders. Your job is to convince them your venture is the
                      one to fund.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ============================================
                BLOCKCHAIN TRACK CARD
                Focuses on blockchain application development
            ============================================ */}
            <Card className='group relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <CardContent className='p-8'>
                {/* Track Header */}
                <div className='text-center mb-8'>
                  <h3 className='text-3xl font-bold text-card-foreground mb-3'>
                    Blockchain Track
                  </h3>
                  <p className='text-lg text-muted-foreground font-medium'>
                    - Create secure, transparent apps on the blockchain -
                  </p>
                </div>

                {/* Visual Separator */}
                <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8'></div>

                {/* Track Details */}
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold text-card-foreground mb-2 text-lg'>
                      What You&apos;ll Build
                    </h4>
                    <p className='text-card-foreground leading-relaxed'>
                      This track is designed for developers who are interested
                      in building secure, transparent apps on the blockchain.
                      You will be provided with ample help and modern tools to
                      supercharge your research and rapid development.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-card-foreground mb-2 text-lg'>
                      24-Hour Challenge
                    </h4>
                    <p className='text-card-foreground leading-relaxed'>
                      Your 24-hour challenge is to solve a problem you care
                      about on campus using blockchain technology and build a
                      secure, transparent decentralized application. You can
                      also choose to dive deep into the ecosystem and write a
                      report or project proposal.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-card-foreground mb-2 text-lg'>
                      Judging Criteria
                    </h4>
                    <p className='text-card-foreground leading-relaxed'>
                      The judges are experienced blockchain developers,
                      researchers, and industry leaders. Your job is to convince
                      them your project is the one to build.
                    </p>
                  </div>
                </div>
              </CardContent>
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
