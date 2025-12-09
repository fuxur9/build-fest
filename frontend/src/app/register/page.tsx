"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useState } from "react";

const registrationSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    currentYear: z.enum(["Freshman", "Sophomore", "Junior", "Senior", "Grad Student"]),
    major: z.string().min(1, "Major is required"),
    dietaryRestrictions: z.string().min(1, "Please specify dietary restrictions (or 'None')"),
    track: z.enum(["Venture", "Blockchain", "Pick for me!"]),
    stillInterested: z.enum(["Yes", "No"]),
    whyTrack: z
      .string()
      .min(10, "Please provide a reason (at least 10 characters)")
      .max(200, "Please keep your response to 2 sentences (max 200 characters)"),
    hasTeam: z.enum(["Yes", "No", "Yes, but we would like 1 more member", "Yes, but we would like 2 more members"]),
    teamEmails: z.string().optional(),
    howDidYouHear: z.enum([
      "Social Media (Instagram, Discord, etc)",
      "CS Newsletter",
      "Flyer / In Person",
      "From a Friend",
      "Other",
    ]),
    howDidYouHearOther: z.string().optional(),
    projectLinks: z.string().optional(),
    releaseOfLiability: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Release of Liability",
    }),
    agreeToLiability: z.boolean().refine((val) => val === true, {
      message: "You must agree to the liability terms",
    }),
  })
  .refine(
    (data) => {
      if (data.howDidYouHear === "Other" && !data.howDidYouHearOther) {
        return false;
      }
      return true;
    },
    {
      message: "Please specify how you heard about the event",
      path: ["howDidYouHearOther"],
    }
  )
  .refine(
    (data) => {
      if (
        (data.hasTeam === "Yes" ||
          data.hasTeam === "Yes, but we would like 1 more member" ||
          data.hasTeam === "Yes, but we would like 2 more members") &&
        !data.teamEmails
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Please enter team member emails",
      path: ["teamEmails"],
    }
  );

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      currentYear: undefined,
      major: "",
      dietaryRestrictions: "",
      track: undefined,
      stillInterested: undefined,
      whyTrack: "",
      hasTeam: undefined,
      teamEmails: "",
      howDidYouHear: undefined,
      howDidYouHearOther: "",
      projectLinks: "",
      releaseOfLiability: false,
      agreeToLiability: false,
    },
  });

  const hasTeam = form.watch("hasTeam");
  const howDidYouHear = form.watch("howDidYouHear");

  async function onSubmit(data: RegistrationFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }

      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <main className="min-h-screen w-full bg-gradient-to-br from-background via-primary/10 to-background flex items-center justify-center pt-32 pb-12 px-4" role="main">
        <Card className="max-w-2xl w-full">
          <CardHeader>
            <h1 className="text-2xl text-center font-semibold">Registration Submitted!</h1>
            <CardDescription className="text-center">
              Thank you for registering for Badger Build Fest 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              You will receive a confirmation email shortly. A follow-up email will be sent to your
              wisc.edu email with more information about attending and checking in for the event
              closer to November 15th.
            </p>
            <Button
              onClick={() => {
                setSubmitSuccess(false);
                form.reset();
              }}
              className="w-full"
              aria-label="Submit another registration"
            >
              Submit Another Registration
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-background via-primary/10 to-background pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <a 
        href="#registration-form" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to registration form
      </a>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Badger Build Festival Registration</h1>
        </header>

        <Card>
          <CardHeader>
            <h2 id="registration-form" className="text-2xl font-semibold">Registration Form</h2>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@wisc.edu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          First Name <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Last Name <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Current Year */}
                <FormField
                  control={form.control}
                  name="currentYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Current Year <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Freshman">Freshman</SelectItem>
                          <SelectItem value="Sophomore">Sophomore</SelectItem>
                          <SelectItem value="Junior">Junior</SelectItem>
                          <SelectItem value="Senior">Senior</SelectItem>
                          <SelectItem value="Grad Student">Grad Student</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Major */}
                <FormField
                  control={form.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Major <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Computer Science" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Dietary Restrictions */}
                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Dietary Restrictions <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="None, Vegetarian, Vegan, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Track Selection */}
                <FormField
                  control={form.control}
                  name="track"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What track do you want to pursue? <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a track" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Venture">
                            Venture Track - Build an MVP, demo it, and pitch its market fit.
                          </SelectItem>
                          <SelectItem value="Blockchain">
                            Blockchain Track - Create secure, transparent apps on the blockchain.
                          </SelectItem>
                          <SelectItem value="Pick for me!">Pick for me!</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Still Interested */}
                <FormField
                  control={form.control}
                  name="stillInterested"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        If there isn&apos;t room in your selected track, are you still interested in
                        participating? <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Why Track */}
                <FormField
                  control={form.control}
                  name="whyTrack"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Why do you want to do this track? (no more than 2 sentences){" "}
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I'm interested in this track because..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Team Status */}
                <FormField
                  control={form.control}
                  name="hasTeam"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Do you already have a team of at least 2 people including yourself?{" "}
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Yes, but we would like 1 more member">
                            Yes, but we would like 1 more member
                          </SelectItem>
                          <SelectItem value="Yes, but we would like 2 more members">
                            Yes, but we would like 2 more members
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Team Emails - Conditional */}
                {(hasTeam === "Yes" ||
                  hasTeam === "Yes, but we would like 1 more member" ||
                  hasTeam === "Yes, but we would like 2 more members") && (
                  <FormField
                    control={form.control}
                    name="teamEmails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Team Member Emails <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="team.member1@wisc.edu, team.member2@wisc.edu"
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* How Did You Hear */}
                <FormField
                  control={form.control}
                  name="howDidYouHear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        How did you hear about Badger Build Festival?{" "}
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Social Media (Instagram, Discord, etc)">
                            Social Media (Instagram, Discord, etc)
                          </SelectItem>
                          <SelectItem value="CS Newsletter">CS Newsletter</SelectItem>
                          <SelectItem value="Flyer / In Person">Flyer / In Person</SelectItem>
                          <SelectItem value="From a Friend">From a Friend</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* How Did You Hear Other - Conditional */}
                {howDidYouHear === "Other" && (
                  <FormField
                    control={form.control}
                    name="howDidYouHearOther"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Please specify <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="How did you hear about us?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Project Links */}
                <FormField
                  control={form.control}
                  name="projectLinks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Personal Project Links (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="GitHub, LinkedIn, portfolio links, etc."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Legal Part 1 */}
                <section className="border-t pt-6 space-y-4" aria-labelledby="liability-heading">
                  <div className="space-y-2">
                    <h3 id="liability-heading" className="font-semibold text-lg">Release of Liability</h3>
                    <p className="text-sm text-muted-foreground">
                      By participating in Badger Build Fest, I acknowledge that my involvement in the
                      hackathon is voluntary and at my own risk. I agree to release, waive, and
                      hold harmless Badger Build Fest, its organizers, sponsors, and venue
                      providers from any and all claims, liabilities, demands, or causes of action,
                      known or unknown, that may arise out of or relate to my participation in this
                      event, including but not limited to personal injury, property damage, or
                      loss.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I understand that Badger Build Fest is not responsible for any technical
                      failures, lost data, or other issues that may affect my participation. I am
                      responsible for my own safety, conduct, and property while at the event.
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="releaseOfLiability"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I have read and understood the Release of Liability Statement and agree
                            to its terms. <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </section>

                {/* Legal Part 2 */}
                <FormField
                  control={form.control}
                  name="agreeToLiability"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to Liability <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                {submitError && (
                  <div 
                    className="p-4 rounded-md bg-destructive/10 border border-destructive/20" 
                    role="alert"
                    aria-live="polite"
                  >
                    <p className="text-sm text-destructive">{submitError}</p>
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting} aria-label={isSubmitting ? "Submitting registration form" : "Submit registration form"}>
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

