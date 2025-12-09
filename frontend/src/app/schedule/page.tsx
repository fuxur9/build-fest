"use client";

/**
 * Schedule Page
 *
 * Displays the complete event schedule for Badger Build Fest 2025
 */

import Schedule from "@/components/Schedule";

export default function SchedulePage() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-background via-primary/10 to-background'>
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <Schedule />
      </section>
    </div>
  );
}
