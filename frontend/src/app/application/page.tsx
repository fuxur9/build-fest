"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";

export default function Register() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileError, setFileError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes

    if (!allowedTypes.includes(file.type)) {
      setFileError("Please upload a PDF, DOC, DOCX, or TXT file.");
      return;
    }

    if (file.size > maxSize) {
      setFileError("File size must be less than 5MB.");
      return;
    }

    setSelectedFile(file);
    setFileError("");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-primary/10 to-background flex items-center justify-center p-4 pt-24'>
      <div className='w-full max-w-4xl'>
        <Card className='bg-card/30 backdrop-blur-md border border-border'>
          <CardContent className='space-y-8'>
            {/* Contact Information Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-foreground border-b pb-2'>
                Details & Contact Information
              </h3>

              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-foreground'>
                    First Name *
                  </label>
                  <Input />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-foreground'>
                    Last Name *
                  </label>
                  <Input />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-foreground'>
                    Phone Number *
                  </label>
                  <Input type='tel' />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-foreground'>
                    Email Address *
                  </label>
                  <Input type='email' />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Current Year in School *
                </label>
                <select className='w-full p-3 border border-border rounded-md bg-background text-foreground'>
                  <option value=''>Select your year</option>
                  <option value='freshman'>Freshman</option>
                  <option value='sophomore'>Sophomore</option>
                  <option value='junior'>Junior</option>
                  <option value='senior'>Senior</option>
                  <option value='graduate'>Graduate Student</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Major(s) and Discipline(s) *
                </label>
                <Input />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Age *
                </label>
                <Input type='number' />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Gender *
                </label>
                <select className='w-full p-3 border border-border rounded-md bg-background text-foreground'>
                  <option value=''>Select gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='non-binary'>Non-binary</option>
                  <option value='prefer-not-to-say'>Prefer not to say</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Do you have any dietary restrictions?
                </label>
                <Input />
              </div>
            </div>

            {/* Application Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-foreground border-b pb-2'>
                Application
              </h3>
              <p className='text-sm text-muted-foreground'>
                You do not have to have a perfect resume -- we just want to get
                to know you!
              </p>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Resume
                </label>
                <p className='text-xs text-muted-foreground mb-2'>
                  If you do not have a resume to submit now, we will send you a
                  link to upload one later.
                </p>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='.pdf,.doc,.docx,.txt'
                  onChange={handleFileInputChange}
                  className='hidden'
                />

                {/* File drop area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                    isDragOver
                      ? "border-primary bg-primary/10"
                      : selectedFile
                      ? "border-green-500 bg-green-50/10"
                      : "border-border hover:border-primary/50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={handleBrowseClick}
                >
                  {selectedFile ? (
                    <div className='space-y-2'>
                      <div className='flex items-center justify-center space-x-2'>
                        <svg
                          className='w-5 h-5 text-green-500'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <p className='text-sm text-green-600 font-medium'>
                          {selectedFile.name}
                        </p>
                      </div>
                      <p className='text-xs text-muted-foreground'>
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        type='button'
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                        className='text-xs text-red-500 hover:text-red-700 underline'
                      >
                        Remove file
                      </button>
                    </div>
                  ) : (
                    <div className='space-y-2'>
                      <svg
                        className='w-8 h-8 mx-auto text-muted-foreground'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                        />
                      </svg>
                      <p className='text-sm text-muted-foreground'>
                        {isDragOver
                          ? "Drop your file here"
                          : "Drop files here or click to browse"}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        PDF, DOC, DOCX, or TXT (max 5MB)
                      </p>
                    </div>
                  )}
                </div>

                {/* Error message */}
                {fileError && (
                  <p className='text-sm text-red-500 mt-2'>{fileError}</p>
                )}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Why do you want to participate in BadgerHacks? *
                </label>
                <p className='text-xs text-muted-foreground mb-2'>
                  Please don't use AI here! There's no length minimum/maximum,
                  we're just curious what you're looking forward to and why you
                  think BadgerHacks would be great for you.
                </p>
                <Textarea rows={4} />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  If you are taking CS classes, what classes are you taking
                  right now?
                </label>
                <p className='text-xs text-muted-foreground mb-2'>
                  If you are not currently in any CS classes, list the ones you
                  completed most recently (if any). No amount of CS coursework
                  is required for BadgerHacks, but we want to make sure our
                  workshops are accurately targeted for our audience.
                </p>
                <Textarea rows={3} />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  What skills do you have?
                </label>
                <p className='text-xs text-muted-foreground mb-2'>
                  For example, "I've written some Python before", "I've made a
                  website", "Java", "Frontend (React)" or "Backend (Python,
                  NodeJS)". No specific prior skills are required for
                  BadgerHacks. Having an idea of what our hackers already know
                  helps us calibrate our workshops to best serve our audience.
                </p>
                <Textarea rows={3} />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  What track do you want to pursue? *
                </label>
                <select className='w-full p-3 border border-border rounded-md bg-background text-foreground'>
                  <option value=''>Select a track</option>
                  <option value='startup'>Startup</option>
                  <option value='blockchain'>Blockchain</option>
                  <option value='opensource'>Open Source</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Why did you choose this track? *
                </label>
                <Textarea rows={3} />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  How did you hear about BadgerHacks?
                </label>
                <Input />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-foreground'>
                    GitHub URL
                  </label>
                  <Input />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-foreground'>
                    LinkedIn URL
                  </label>
                  <Input />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-foreground'>
                    Personal Website URL
                  </label>
                  <Input />
                </div>
              </div>
            </div>

            {/* Legal Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-foreground border-b pb-2'>
                Legal
              </h3>

              <div className='space-y-4'>
                <div className='bg-muted/50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-foreground mb-2'>
                    BadgerHacks Release of Liability Statement
                  </h4>
                  <p className='text-sm text-muted-foreground mb-4'>
                    By participating in BadgerHacks, I acknowledge that my
                    involvement in the hackathon is voluntary and at my own
                    risk. I agree to release, waive, and hold harmless
                    BadgerHacks, its organizers, sponsors, and venue providers
                    from any and all claims, liabilities, demands, or causes of
                    action, known or unknown, that may arise out of or relate to
                    my participation in this event, including but not limited to
                    personal injury, property damage, or loss.
                  </p>
                  <p className='text-sm text-muted-foreground mb-4'>
                    I understand that BadgerHacks is not responsible for any
                    technical failures, lost data, or other issues that may
                    affect my participation. I am responsible for my own safety,
                    conduct, and property while at the event.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    By participating in BadgerHacks, I confirm that I have read
                    and understood the Release of Liability Statement and agree
                    to its terms.
                  </p>
                </div>

                <div className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    id='liability'
                    className='rounded'
                    required
                  />
                  <label
                    htmlFor='liability'
                    className='text-sm text-foreground'
                  >
                    I agree to the Release of Liability Statement *
                  </label>
                </div>

                <div className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    id='confirmation'
                    className='rounded'
                  />
                  <label
                    htmlFor='confirmation'
                    className='text-sm text-muted-foreground'
                  >
                    I understand that I have not yet uploaded a resume, so I
                    will receive an email from BadgerHacks allowing me to upload
                    it before the event.
                  </label>
                </div>
              </div>
            </div>

            <div className='text-center space-y-4'>
              <p className='text-sm text-muted-foreground'>
                You will receive an email confirmation message notifying you
                that your application has been received! Please review the email
                and verify your details are correct.
              </p>
              <p className='text-sm text-muted-foreground'>
                If you do not receive a confirmation email or your details are
                incorrect, please reach out to support@BadgerHacks.io for
                assistance.
              </p>
            </div>

            <Button className='w-full' size='lg'>
              Submit Application
            </Button>

            <div className='text-center space-y-2'>
              <p className='text-sm text-muted-foreground'>
                Thank you for applying!
              </p>
              <p className='text-sm text-muted-foreground'>
                You will receive a confirmation email. Decisions will be
                released on a rolling basis. In the meantime, join our Discord
                for updates!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
