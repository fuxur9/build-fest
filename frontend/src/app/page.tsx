import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Code,
  Zap,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-primary/10 to-background'>
      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='flex items-center justify-center gap-8 mb-8'>
              <Image
                src='/badger-unleashed.png'
                alt='Badger Unleashed'
                width={120}
                height={120}
                className='flex-shrink-0'
              />
              <h1 className='text-5xl md:text-7xl font-bold text-foreground font-serif'>
                BUILD Fest
              </h1>
            </div>
            <p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
              Badger • Unleashed • Innovate • Learn • Deliver
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
            <Button asChild size='lg' className='text-lg px-8 py-6'>
              <Link
                href='https://forms.gle/V41KWM2T9SjHj1cG9'
                target='_blank'
                rel='noopener noreferrer'
              >
                Apply Now
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='text-lg px-8 py-6'
              asChild
            >
              <Link href='#about'>Learn More</Link>
            </Button>
          </div>

          {/* Event Details */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-6 text-center'>
                <MapPin className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-card-foreground mb-2'>
                  Location
                </h3>
                <p className='text-muted-foreground'>Morgridge Hall</p>
              </CardContent>
            </Card>
            <Card className='bg-card/50 backdrop-blur-md border border-border hover:bg-card/60 transition-colors'>
              <CardContent className='p-6 text-center'>
                <Calendar className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-card-foreground mb-2'>
                  Date
                </h3>
                <p className='text-muted-foreground'>November 15-16, 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Our Sponsors
            </h2>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-12'>
            <Image
              src='/cursor-text.png'
              alt='Cursor'
              width={200}
              height={200}
              className='object-contain opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/college-xyz.png'
              alt='College.xyz'
              width={200}
              height={200}
              className='object-contain opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/sui-text.png'
              alt='Sui'
              width={200}
              height={200}
              className='object-contain opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/gemini.png'
              alt='Gemini'
              width={200}
              height={200}
              className='object-contain opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/turtle-xyz.png'
              alt='Turtle.xyz'
              width={200}
              height={200}
              className='object-contain opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/cncf.png'
              alt='CNCF'
              width={200}
              height={200}
              className='object-contain opacity-70 hover:opacity-100 transition-opacity'
            />
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
              <Image
                src='/tech-exploration-lab.png'
                alt='Tech Exploration Lab'
                width={300}
                height={300}
                className='rounded-lg object-contain mb-3'
              />
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

      {/* Tracks Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Competition Tracks
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Choose your track and build something amazing in 24 hours
            </p>
          </div>

          <div className='space-y-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Startup Track */}
              <Card className='bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md border border-primary/30'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center'>
                        <span className='text-2xl'>🚀</span>
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-card-foreground'>
                          Startup Track
                        </h3>
                        <div className='flex items-center space-x-2'>
                          <Badge
                            variant='outline'
                            className='text-sm font-semibold text-primary'
                          >
                            $?? Prize Pool
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='text-muted-foreground mb-4'>
                    Build a complete startup with business model, pitch deck,
                    and MVP. Focus on market validation and scalability.
                  </p>
                  <Collapsible>
                    <CollapsibleTrigger className='flex items-center justify-between w-full p-3 text-left text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-primary/5'>
                      <span>Learn More</span>
                      <ChevronDown className='h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180' />
                    </CollapsibleTrigger>
                  </Collapsible>
                </CardContent>
              </Card>

              {/* Blockchain Track */}
              <Card className='bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md border border-primary/30'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center'>
                        <span className='text-2xl'>⛓️</span>
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-card-foreground'>
                          Blockchain Track
                        </h3>
                        <div className='flex items-center space-x-2'>
                          <Badge
                            variant='outline'
                            className='text-sm font-semibold text-primary'
                          >
                            $?? Prize Pool
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='text-muted-foreground mb-4'>
                    Develop decentralized applications, smart contracts, and
                    blockchain solutions. Explore Web3 technologies.
                  </p>
                  <Collapsible>
                    <CollapsibleTrigger className='flex items-center justify-between w-full p-3 text-left text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-primary/5'>
                      <span>Learn More</span>
                      <ChevronDown className='h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180' />
                    </CollapsibleTrigger>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              About BUILD Fest
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              A 24-hour intensive coding event where developers, designers, and
              blockchain enthusiasts come together to build innovative
              solutions.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Card className='bg-card/30 backdrop-blur-md border border-border hover:bg-card/40 transition-colors'>
              <CardContent className='p-6'>
                <Code className='w-12 h-12 text-primary mb-4' />
                <h3 className='text-xl font-semibold text-card-foreground mb-3'>
                  Build
                </h3>
                <p className='text-muted-foreground'>
                  Create innovative blockchain applications using cutting-edge
                  technologies.
                </p>
              </CardContent>
            </Card>
            <Card className='bg-card/30 backdrop-blur-md border border-border hover:bg-card/40 transition-colors'>
              <CardContent className='p-6'>
                <Users className='w-12 h-12 text-primary mb-4' />
                <h3 className='text-xl font-semibold text-card-foreground mb-3'>
                  Collaborate
                </h3>
                <p className='text-muted-foreground'>
                  Work with talented developers and form lasting connections.
                </p>
              </CardContent>
            </Card>
            <Card className='bg-card/30 backdrop-blur-md border border-border hover:bg-card/40 transition-colors'>
              <CardContent className='p-6'>
                <Zap className='w-12 h-12 text-primary mb-4' />
                <h3 className='text-xl font-semibold text-card-foreground mb-3'>
                  Innovate
                </h3>
                <p className='text-muted-foreground'>
                  Push the boundaries of what&apos;s possible in decentralized
                  technology.
                </p>
              </CardContent>
            </Card>
            <Card className='bg-card/30 backdrop-blur-md border border-border hover:bg-card/40 transition-colors'>
              <CardContent className='p-6'>
                <Trophy className='w-12 h-12 text-primary mb-4' />
                <h3 className='text-xl font-semibold text-card-foreground mb-3'>
                  Compete
                </h3>
                <p className='text-muted-foreground'>
                  Showcase your skills and win amazing prizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Ready to Build the Future?
          </h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Join hundreds of developers in the ultimate blockchain hackathon
            experience.
          </p>
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
              <Link href='#about'>Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-muted/40 backdrop-blur-md border-t border-border py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center space-x-3 mb-4 md:mb-0'>
              <Image
                src='/BadgerBlockchainLogo.png'
                alt='Badger Blockchain'
                width={32}
                height={32}
                className='rounded-lg'
              />
              <span className='text-lg font-bold text-foreground'>
                BUILD Fest 2024
              </span>
            </div>
            <div className='flex space-x-6'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Privacy
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Terms
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-border text-center'>
            <p className='text-muted-foreground'>
              © 2024 BUILD Fest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
