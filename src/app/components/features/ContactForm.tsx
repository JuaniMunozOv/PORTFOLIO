"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { BackgroundBeams } from "../ui/background-beams";
import { cn } from "../utils/cn";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import emailjs from '@emailjs/browser';


export function SignupFormDemo() {

  const [message, setMessage] = useState({ text: '', type: '' });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;  // Use currentTarget instead of target for type safety

    emailjs.sendForm('service_9p0h2vg', 'template_92dwtij', form, 'rk9r69F631ngQrJrs')
      .then((result) => {
        setMessage({ text: "Mensaje enviado con éxito!", type: 'success' });
      }, (error) => {
        setMessage({ text: "Error al enviar mensaje.", type: 'error' });
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full" />
      <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black opacity-95 z-10">
        <h2 className="font-bold text-xl text-white dark:text-neutral-200">
          Contact me
        </h2>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="fullname" className="text-white">Full Name</Label>
            <Input id="fullname" name="user_name" placeholder="Full Name" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="subject" className="text-white">Subject</Label>
            <Input id="subject" name="user_email" placeholder="Subject" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="message" className="text-white">Message</Label>
            <Input id="message" name="message" placeholder="Write your message here" as="textarea" className="h-32 text-black" required />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-md h-12 font-medium mt-4"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>

          <div className={`message ${message.type}`}>
            {message.text}
          </div>

        </form>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4 mt-4">
          <a
            href="https://github.com/JuaniMunozOv"
            className="relative flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
            target="_blank" rel="noopener noreferrer"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-ignacio-muñoz-/"
            className="relative flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
            target="_blank" rel="noopener noreferrer"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              LinkedIn
            </span>
          </a>
        </div>
      </div>

    </div >
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
