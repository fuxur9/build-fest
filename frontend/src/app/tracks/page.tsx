"use client";

/**
 * Tracks Page
 * 
 * Displays information about the competition tracks: Venture and Blockchain
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TracksPage() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-background via-primary/10 to-background'>
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Competition Tracks
            </h1>
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
                  <h2 className='text-3xl font-bold text-card-foreground '>
                    Venture Track
                  </h2>
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
                    <h3 className='font-semibold text-card-foreground mb-2 text-lg'>
                      What You&apos;ll Build
                    </h3>
                    <p className='text-card-foreground leading-relaxed'>
                      This track is defined by startup-level speed, not coding
                      expertise. Your 24-hour challenge is to go from ideation
                      to a functional demo and a polished, investment-worthy
                      pitch deck.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-card-foreground mb-2 text-lg'>
                      Beginner-Friendly
                    </h3>
                    <p className='text-card-foreground leading-relaxed'>
                      You do not need to be an experienced programmer. Your
                      pitch, problem validation, and market-fit justification
                      will be weighted much more heavily than the technical
                      implementation.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-card-foreground mb-3 text-lg'>
                      Support & Resources
                    </h3>
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
                    <h3 className='font-semibold text-card-foreground mb-2 text-lg'>
                      Judging Panel
                    </h3>
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
                  <h2 className='text-3xl font-bold text-card-foreground mb-3'>
                    Blockchain Track
                  </h2>
                  <p className='text-lg text-muted-foreground font-medium'>
                    - Create secure, transparent apps on the blockchain -
                  </p>
                </div>

                {/* Visual Separator */}
                <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8'></div>

                {/* Track Details */}
                <div className='space-y-6'>
                  <div>
                    <h3 className='font-semibold text-card-foreground mb-2 text-lg'>
                      What You&apos;ll Build
                    </h3>
                    <p className='text-card-foreground leading-relaxed'>
                      This track is designed for developers who are interested
                      in building secure, transparent apps on the blockchain.
                      You will be provided with ample help and modern tools to
                      supercharge your research and rapid development.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-card-foreground mb-2 text-lg'>
                      24-Hour Challenge
                    </h3>
                    <p className='text-card-foreground leading-relaxed'>
                      Your 24-hour challenge is to solve a problem you care
                      about on campus using blockchain technology and build a
                      secure, transparent decentralized application. You can
                      also choose to dive deep into the ecosystem and write a
                      report or project proposal.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-card-foreground mb-2 text-lg'>
                      Judging Criteria
                    </h3>
                    <p className='text-card-foreground leading-relaxed'>
                      The judges are experienced blockchain developers,
                      researchers, and industry leaders. Your job is to convince
                      them your project is the one to build.
                    </p>
                  </div>
                  <div className='text-center'>
                    <Link
                      href='https://www.notion.so/Badger-Build-Fest-Blockchain-Track-2a4125054f828071903be6faa5ef7b5a?source=copy_link'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-lg text-primary font-medium underline hover:text-primary/80 transition-colors inline-flex items-center gap-1'
                    >
                      <span className='text-primary'>Track Details</span>
                      <ArrowRight className='w-4 h-4' />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

