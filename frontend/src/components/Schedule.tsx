"use client";

import { Card, CardContent } from "@/components/ui/card";

interface ScheduleRow {
  time: string;
  mainEvent?: string;
  sideEvent?: string;
  day: "Saturday" | "Sunday";
}

const scheduleData: ScheduleRow[] = [
  // Saturday, November 15th
  {
    time: "12:00 PM",
    mainEvent: "Doors Open",
    day: "Saturday",
  },
  {
    time: "12:30 PM",
    mainEvent: "Opening Ceremony",
    day: "Saturday",
  },
  {
    time: "1:00 PM",
    mainEvent: "Hacking Begins!",
    day: "Saturday",
  },
  {
    time: "1:10 PM - 2:00 PM",
    sideEvent: "Cursor IDE Workshop (Room B2590)",
    day: "Saturday",
  },
  {
    time: "2:00 PM - 3:00 PM",
    sideEvent: "Blockchain basics: Solana CRUD dApp (Room B2556)",
    day: "Saturday",
  },
  {
    time: "3:00 PM - 4:00 PM",
    sideEvent: "Whitepaper reading: Agent Payment x402 (Room B2556)",
    day: "Saturday",
  },
  {
    time: "4:00 PM - 5:00 PM",
    sideEvent: "Transcend: How to Pitch (Room B2550)",
    day: "Saturday",
  },
  {
    time: "5:00 PM - 7:00 PM",
    mainEvent: "Dinner & Mentor Mingle",
    day: "Saturday",
  },
  {
    time: "7:00 PM",
    mainEvent: "Building Doors Lock",
    day: "Saturday",
  },
  {
    time: "9:00 PM",
    mainEvent: "Event Winds Down",
    day: "Saturday",
  },
  // Sunday, November 16th
  {
    time: "12:00 PM",
    mainEvent: "Doors Open",
    day: "Sunday",
  },
  {
    time: "12:00 PM",
    mainEvent: "PROJECTS DUE (Submissions Lock)",
    sideEvent: "Snack Buffet Opens",
    day: "Sunday",
  },
  {
    time: "1:00 PM - 2:30 PM",
    mainEvent: "Judging Showcase",
    day: "Sunday",
  },
  {
    time: "2:30 PM - 3:00 PM",
    sideEvent: "Judges' Break",
    day: "Sunday",
  },
  {
    time: "3:00 PM - 4:00 PM",
    mainEvent: "Judges' Consensus Discussion",
    day: "Sunday",
  },
  {
    time: "4:00 PM - 5:00 PM",
    mainEvent: "Closing Ceremony",
    day: "Sunday",
  },
  {
    time: "5:00 PM",
    mainEvent: "Event Concludes",
    day: "Sunday",
  },
];

export default function Schedule() {
  return (
    <div id='schedule' className='max-w-7xl mx-auto'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl md:text-6xl font-bold text-foreground mb-6'>
          Event Schedule
        </h1>
      </div>

      <div className='flex justify-center'>
        <div className='w-full max-w-5xl'>
          <Card className='bg-card/50 backdrop-blur-md border border-border'>
            <CardContent className='p-6 md:p-8'>
              <div className='overflow-x-auto'>
                <div className='min-w-full'>
                  {/* Header */}
                  <div className='grid grid-cols-3 gap-4 mb-4 pb-4 border-b-2 border-border'>
                    <div className='font-bold text-lg text-card-foreground'>
                      Time
                    </div>
                    <div className='text-lg text-card-foreground'>
                      Main Event
                    </div>
                    <div className='text-lg text-card-foreground'>
                      Side Event
                    </div>
                  </div>
                  {/* Rows */}
                  <div className='space-y-1'>
                    {scheduleData.map((row, index) => {
                      const isDayHeader =
                        index === 0 || scheduleData[index - 1].day !== row.day;
                      const isLastOfDay =
                        index === scheduleData.length - 1 ||
                        scheduleData[index + 1].day !== row.day;

                      return (
                        <div key={index}>
                          {isDayHeader && (
                            <div className='mt-6 mb-4 pt-4 first:mt-0 first:pt-0'>
                              <h2 className='text-2xl font-bold text-card-foreground'>
                                {row.day === "Saturday"
                                  ? "Saturday, November 15th"
                                  : "Sunday, November 16th"}
                              </h2>
                            </div>
                          )}
                          <div
                            className={`grid grid-cols-3 gap-4 py-3 px-2 rounded-md hover:bg-card/30 transition-colors ${
                              isLastOfDay ? "mb-4 border-b-2 border-border" : ""
                            }`}
                          >
                            <div className='font-semibold text-card-foreground'>
                              {row.time}
                            </div>
                            <div className='font-semibold text-muted-foreground'>
                              {row.mainEvent || ""}
                            </div>
                            <div className='font-semibold text-muted-foreground'>
                              {row.sideEvent || ""}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
