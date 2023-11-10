/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Container } from "../Container";
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link component
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Confirm() {
  const router = useRouter();
  const { type } = router.query;

  const getMessage = () => {
    switch(type) {
      case 'sales':
        return {
          title: 'Thank You for Reaching Out!',
          body: `Your message has been successfully sent. A member of our sales team will reach out to you shortly to discuss your enterprise needs and how we can assist you.`,
          signoff: 'The XStack Sales Team'
        };
      case 'support':
        return {
          title: 'Your Support Request Has Been Received!',
          body: `We've successfully received your request. Our support team will get back to you as soon as possible. Please check your inbox for further updates.`,
          signoff: 'The XStack Support Team'
        };
      default:
        return {
          title: 'Thanks so much!',
          body: `Keep an eye on your inbox for product updates and announcements from XStack and HEADLINE.`,
          signoff: 'The XStack Team'
        };
    }
  }

  const message = getMessage();

  return (
    <>
      <Head>
        <title>Confirm</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <div className="container mx-auto">
          <div className="pt-20 mx-auto ">
            <div className="max-w-md mx-auto rounded-lg shadow-xl dark:bg-gray-900 dark:bg-opacity-80">
              <div className="p-6 rounded-lg shadow-sm ">
                <div className="mx-auto space-y-4 dark:text-white">
                  <h2 className="text-xl font-bold">{message.title}</h2>
                  <p>
                    {message.body}
                  </p>{" "}
                  <p>
                    Thanks,
                    <br />
                    {message.signoff}
                  </p>
                  <div>

                  </div>
                </div>
              </div>


            </div>
            <div className="flex items-center gap-3 justify-center mt-4">
      <Link href="/" className="dark:text-[#888888]  hover:underline underline-offset-4 text-[#666666] text-sm">Navigate Home <ChevronRightIcon className="w-4 h-4 inline-block" />
                    </Link>
                    </div>
          </div>

        </div>

      </Container>

    </>
  );
}
