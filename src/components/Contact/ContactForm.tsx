"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be in proper format",
  }),
  phone: z.string().min(2, {
    message: "Phone number must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: implement
    console.log(values);

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        emailAddress: values.email,
        phoneNumber: values.phone,
        content: values.content,
      }),
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-4 flex flex-wrap">
          {/* Submitters Name */}
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                htmlFor="name"
              >
                Name
              </label>

              <input
                className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                placeholder="Enter your name"
                type="text"
                id="name"
                {...register("name")}
              />

              {errors?.name && (
                <p className="px-1 text-xs text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          {/* Submitters Email Address */}
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                htmlFor="email"
              >
                Email
              </label>

              <input
                className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                placeholder="Enter your email"
                type="email"
                id="email"
                {...register("email")}
              />

              {errors?.email && (
                <p className="px-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          {/* Submitters Phone Number */}
          <div className="w-full px-4">
            <div className="mb-8">
              <label
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                placeholder="Enter your phone number"
                type="tel"
                id="phone"
                {...register("phone")}
              />

              {errors?.phone && (
                <p className="px-1 text-xs text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          {/* Submitters Message */}
          <div className="w-full px-4">
            <label
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
              htmlFor="message"
            >
              Message
            </label>

            <textarea
              className="border-stroke w-full resize-none rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              placeholder="What is your message"
              rows={8}
              id="message"
              {...register("content")}
            />

            {errors?.content && (
              <p className="px-1 text-xs text-red-600">
                {errors.content.message}
              </p>
            )}
          </div>
          {/* Send Message */}
          <div className="w-full px-4">
            <button
              type="submit"
              className="mt-3 rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
