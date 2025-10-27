"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-primary/10 to-background'>
      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-8xl mx-auto text-center'>
          <div className='mb-16'>
            <div className='flex items-center justify-center gap-8 mb-12'>
              <h1 className='text-6xl md:text-8xl lg:text-8xl font-bold text-foreground font-space-grotesk'>
                Badger Build Fest 2025
              </h1>
            </div>

            {/* <p className='text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
              Badger • Unleashed • Innovate • Learn • Deliver
            </p> */}
          </div>

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

          {/* Event Details */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-4 text-center'>
                <MapPin className='w-12 h-12 text-primary mx-auto mb-4' />
                <h3 className='text-2xl font-semibold text-card-foreground mb-2'>
                  Location
                </h3>
                <p className='text-xl text-muted-foreground'>Morgridge Hall</p>
              </CardContent>
            </Card>
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-4 text-center'>
                <Calendar className='w-12 h-12 text-primary mx-auto mb-4' />
                <h3 className='text-2xl font-semibold text-card-foreground mb-2'>
                  Date
                </h3>
                <p className='text-xl text-muted-foreground'>
                  12:30 PM Nov 15 - 6:00 PM Nov 16
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id='sponsors' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Our Sponsors
            </h2>
          </div>

          {/* Cursor Logo - Single Row */}
          <div className='flex justify-center items-center mb-12'>
            <Link
              href='https://cursor.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/cursor-text.png'
                alt='Cursor'
                width={500}
                height={500}
                className='object-contain opacity-70 hover:opacity-100 transition-opacity'
              />
            </Link>
          </div>

          {/* Other Sponsors - Single Row */}
          <div className='flex flex-wrap justify-center items-center gap-12'>
            <Link
              href='https://turtle.xyz'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/turtle-xyz-removebg-preview.png'
                alt='Turtle.xyz'
                width={200}
                height={200}
                className='object-contain opacity-70 hover:opacity-100 transition-opacity'
              />
            </Link>
            <Link
              href='https://college.xyz'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/college-xyz.png'
                alt='College.xyz'
                width={200}
                height={200}
                className='object-contain opacity-70 hover:opacity-100 transition-opacity'
              />
            </Link>
            <Link
              href='https://gemini.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/gemini.png'
                alt='Gemini'
                width={200}
                height={200}
                className='object-contain opacity-70 hover:opacity-100 transition-opacity'
              />
            </Link>

            <Link
              href='https://cncf.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/CNCF-Picsart-BackgroundRemover.png'
                alt='CNCF'
                width={200}
                height={200}
                className='object-contain opacity-70 hover:opacity-100 transition-opacity'
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Host Organizations */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
            Host Organizations
          </h2>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12'>
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

            <span className='text-3xl font-bold text-primary'>×</span>

            <div className='flex flex-col items-center text-center'>
              <Image
                src='/badger-blockchain.png'
                alt='Badger Blockchain'
                width={500}
                height={271}
                className='rounded-lg object-contain mb-3'
              />
              <span className='text-lg font-semibold text-foreground'>
                Badger Blockchain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              About Badger Build Fest
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-4'>
              Badger Build Fest is a 24-hour hackathon half-hackathon half
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

      {/* Schedule Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl md:text-6xl font-bold text-foreground mb-6'>
              Event Schedule
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Saturday */}
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-6'>
                <h3 className='text-3xl font-bold text-card-foreground mb-6 text-center'>
                  Saturday, November 15th
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        12:30 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Hackathon Kick-off
                      </p>
                      <p className='text-base text-muted-foreground'>
                        Location: Hello World!, Morgridge Hall
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        1:30 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Hacking Begins
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        1:30 PM – 9:00 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Dedicated Hacking Space & Workshops
                      </p>
                      <p className='text-base text-muted-foreground'>
                        Location: Morgridge Hall
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sunday */}
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-6'>
                <h3 className='text-3xl font-bold text-card-foreground mb-6 text-center'>
                  Sunday, November 16th
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        1:30 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Hacking Ends & Projects Must Be Submitted
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        1:30 PM – 2:00 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Team Setup for Project Showcase
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        2:00 PM – 4:00 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Project Showcase & Judging
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        4:00 PM – 5:00 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Judge Deliberation & Final Decisions
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <p className='text-lg font-semibold text-card-foreground'>
                        5:00 PM – 6:00 PM
                      </p>
                      <p className='text-lg text-muted-foreground'>
                        Award Ceremony & Closing Remarks
                      </p>
                      <p className='text-base text-muted-foreground'>
                        Location: Hello World!, Morgridge Hall
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id='tracks' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Competition Tracks
            </h2>
          </div>

          <div className='space-y-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Venture Track */}
              <Card className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300'>
                <CardContent className='p-8'>
                  {/* Header */}
                  <div className='text-center mb-8'>
                    <h3 className='text-3xl font-bold text-card-foreground mb-3'>
                      Venture Track
                    </h3>
                    <p className='text-xl text-foreground font-semibold'>
                      - Build an MVP, demo it, and pitch its market fit -
                    </p>
                  </div>

                  {/* Separator Line */}
                  <div className='w-full h-px bg-primary/30 mb-8'></div>

                  {/* Content */}
                  <div className='space-y-6'>
                    <div>
                      <h4 className='font-semibold text-card-foreground mb-2'>
                        What You&apos;ll Build
                      </h4>
                      <p className='text-card-foreground'>
                        This track is defined by startup-level speed, not coding
                        expertise. Your 24-hour challenge is to go from ideation
                        to a functional demo and a polished, investment-worthy
                        pitch deck.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-card-foreground mb-2'>
                        Beginner-Friendly
                      </h4>
                      <p className='text-card-foreground'>
                        You do not need to be an experienced programmer. Your
                        pitch, problem validation, and market-fit justification
                        will be weighted much more heavily than the technical
                        implementation.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-card-foreground mb-3'>
                        Support & Resources
                      </h4>
                      <p className='text-card-foreground mb-3'>
                        We&apos;ll supercharge your process with hands-on
                        support. You will have access to:
                      </p>
                      <ul className='text-card-foreground space-y-2 ml-4'>
                        <li>
                          • Workshops on Figma, UI design and AI tools (like
                          Cursor) to help you build a prototype you can touch
                          and play with.
                        </li>
                        <li>
                          • On-site mentors, including experienced investors and
                          founders, to help guide your pitch deck and make sure
                          your vision is crystal clear.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold text-black mb-2'>
                        Judging Panel
                      </h4>
                      <p className='text-black'>
                        The judges are experienced founders, VCs, and tech
                        leaders. Your job is to convince them your venture is
                        the one to fund.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Blockchain Track */}
              <Card className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300'>
                <CardContent className='p-8'>
                  {/* Header */}
                  <div className='text-center mb-8'>
                    <h3 className='text-3xl font-bold text-card-foreground mb-3'>
                      Blockchain Track
                    </h3>
                    <p className='text-xl text-foreground font-semibold'>
                      - Create secure, transparent apps on the blockchain -
                    </p>
                  </div>

                  {/* Separator Line */}
                  <div className='w-full h-px bg-primary/30 mb-8'></div>

                  {/* Content */}
                  <div className='space-y-6'>
                    <div>
                      <h4 className='font-semibold text-card-foreground mb-2'>
                        What You&apos;ll Build
                      </h4>
                      <p className='text-card-foreground'>
                        This track is designed for developers who are interested
                        in building secure, transparent apps on the blockchain.
                        You will be provided with ample help and modern tools to
                        supercharge your research and rapid development.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-card-foreground mb-2'>
                        24-Hour Challenge
                      </h4>
                      <p className='text-card-foreground'>
                        Your 24-hour challenge is to solve a problem you care
                        about and build a secure, transparent app on the
                        blockchain.
                      </p>
                    </div>

                    <div>
                      <h4 className='font-semibold text-black mb-2'>
                        Judging Criteria
                      </h4>
                      <p className='text-black'>TBA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6 text-center'>
            Ready to Build the Future?
          </h2>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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

      {/* Footer */}
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
