import axios from "axios";
import { FadeIn } from "../home-shared/FadeIn";
import { ContactCard } from "../../ContactCard";
import { SalesSidebar } from "../../SalesSidebar";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import cn from "classnames";
import contactStyles from "./index.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Support = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" }); // Validation mode set to onBlur
  const [show, setShow] = useState(false);
  const router = useRouter();

  const formData = watch();

  const formSubmit = async (data) => {
    try {
      const postData = {
        ...data,
        type: "support",
      };

      const response = await axios.post(
        "https://formspree.io/f/moqovyev",
        postData
      );
      console.log(response);
      router.push("/confirm?type=support");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LandingPageGlobalStyles />
      <div>
        <FadeIn
          className={cn(
            "z-10 flex flex-col items-center justify-center w-full h-full"
          )}
        >
          <div
            className={cn(
              "z-10 flex flex-col items-center justify-center w-full h-full",
              contactStyles.supportContainer
            )}
          >
            <h1 className="mt-12 w-full h1-custom lg:!mt-12 md:!w-full font-bold text-5xl lg:text-6xl leading-tight xl:leading-snug text-center  bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
              Contact our Support Team
            </h1>
            <div className="mt-4 l-spacing mb-12 text-xl max-h-[112px] md:max-h-[96px]  md:text-2xl font-space-grotesk text-center text-[#666666] dark:text-[#888888]">
              We're here to help with any issues you're experiencing.
            </div>
            <div className="flex w-full container items-center justify-center gap-6 sm:mx-0 md:mb-0 flex-col mlg:!flex-row z-10 lg:!translate-y-0">
              <ContactCard className=" sm:w-full md:w-auto">
                <form
                  className="w-full max-w-lg"
                  onSubmit={handleSubmit(formSubmit)}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-">
                    <label className="flex flex-col">
                      <div className="block mb-2 text-xs text-gray-600 dark:text-[#888888]">
                        Your Email
                      </div>
                      <div className="input-container">
                        <input
                          className={cn(
                            errors.email && contactStyles.inputErrorInput,
                            "bg-contact-field text-md nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm  contrast-more:nx-border contrast-more:nx-border-current"
                          )}
                          type="email"
                          {...register("email", {
                            required: "Email address is required.",
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          placeholder="Email"
                        />
                        {errors.email && (
                          <div
                            className={cn(contactStyles.inputErrorContainer)}
                          >
                            <div aria-hidden="true">
                              <ExclamationCircleIcon
                                width="20"
                                height="20"
                                className={cn(contactStyles.inputErrorIcon)}
                              />
                            </div>
                            <p className={cn(contactStyles.inputErrorText)}>
                              {errors.email.message &&
                                errors.email.message.toString()}
                            </p>
                          </div>
                        )}
                      </div>
                    </label>
                    <label className="flex flex-col">
                      <div className="block mb-2 text-xs text-gray-600 dark:text-[#888888] ">
                        Describe Your Issue
                      </div>
                      <div className="input-container">
                        <textarea
                          {...register("message", {
                            required: "Message is required.",
                          })}
                          name="message"
                          rows={8}
                          className="bg-contact-field nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm contrast-more:nx-border contrast-more:nx-border-current height-unset resize-none"
                        ></textarea>
                      </div>
                    </label>
                    <div
                      className={cn(
                        contactStyles.submitRow,
                        "flex items-center justify-end"
                      )}
                    >
                      <button
                        data-geist-button
                        disabled={!isValid}
                        type="submit"
                        className={cn(
                          contactStyles.submitButton,
                          "flex items-center justify-center w-25 px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
                        )}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </ContactCard>
              <SalesSidebar>
                <div className="text-wrapper">hello world</div>
                <div>Hello wowoesd</div>
              </SalesSidebar>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Support;
