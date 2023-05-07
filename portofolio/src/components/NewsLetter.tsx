
import React, { useRef, useState } from "react";
export interface NewsLetter {
  name: string;
  email: string;
}
export const NewsLetterForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredEmail: string =
      emailRef && emailRef.current ? emailRef.current.value : "";
    const enteredName: string =
      nameRef && nameRef.current ? nameRef.current.value : "";
    const payload: NewsLetter = {
      email: enteredEmail,
      name: enteredName,
    };
    setSubmitted(true);
    const response = await fetch('/api/firebase-write', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
     await response.json();
  }
  return (
    <>
      {submitted ? (
        <div className="mt-6 text-center text-6xl dark:text-light xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl">
          Thank you for subscribing! I will keep you updated with the latest news
          and tips.
        </div>
      ) : (
        <div className=" flex flex-col justify-center py-12 px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-6xl dark:text-light xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl">
              Improve your web development skills every week in 5 minutes or
              less
            </h2>
          </div>

          <div className="flex justify-center  mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="w-6/12 bg-white  py-8 px-6 shadow rounded-lg sm:px-10">
              <form className="mb-0 space-y-6 " onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="vladimir.nitu.business@outlook.com"
                      id="email"
                      ref={emailRef}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={nameRef}
                      placeholder="Vladimir"
                      id="name"
                      name="name"
                      type="text"
                      required
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className=" flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
