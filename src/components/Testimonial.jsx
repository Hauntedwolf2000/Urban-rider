import React, { useRef, useState } from "react";

const Testimonial = () => {
  const emailInput = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    if (!validateEmail(email)) {
      // Email is not valid, handle accordingly (e.g., show error message)
      alert("Please enter a valid email address.");
      return;
    }
    // Email is valid, proceed with form submission
    // Your form submission logic here

    // Assuming the form submission is successful, set submitted to true
    setSubmitted(true);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <div>
        <div class="container  mx-auto md:px-6">
          <section class="mb-32 text-center">
            <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

            <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
              <div class="mb-12 md:mb-0">
                <div class="mb-6 flex justify-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                    class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  />
                </div>
                <h5 class="mb-2 text-lg font-bold">Maria Smantha</h5>
                <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                  Web Developer
                </h6>
                <p class="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul class="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div class="mb-12 md:mb-0">
                <div class="mb-6 flex justify-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                    class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  />
                </div>
                <h5 class="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                  Graphic Designer
                </h6>
                <p class="mb-4">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul class="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div class="mb-0">
                <div class="mb-6 flex justify-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                    class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  />
                </div>
                <h5 class="mb-2 text-lg font-bold">John Smith</h5>
                <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                  Marketing Specialist
                </h6>
                <p class="mb-4">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul class="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div>
        {/*button to menu */}
        <div class="flex flex-col items-center justify-center">
          <div class="relative inline-flex  group">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="menu"
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get Yourself Safe now
            </a>
          </div>
        </div>
      </div>
      {/*Newsletter */}
      <section class="mt-24 mb-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="relative bg-red-500 py-10 px-8 md:py-16 md:px-12 aos-init">
            <div
              class="absolute right-0 top-0 -ml-40 pointer-events-none"
              aria-hidden="true"
            >
              <svg
                width="238"
                height="110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="illustration-04"
                    x1="369.483"
                    y1="-84.633"
                    x2="139.954"
                    y2="-199.798"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" stop-opacity=".01"></stop>
                    <stop
                      offset="1"
                      stop-color="#fff"
                      stop-opacity=".24"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="relative flex flex-col lg:flex-row justify-between items-center">
              <div class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 class="h3 text-white mb-2">Stay in the loop</h3>
                <p class=" text-lg">
                  Join our newsletter to get top news before anyone else.
                </p>
              </div>
              <form class="w-full lg:w-1/2" onSubmit={handleSubmit}>
                <div class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="email"
                    class="w-full appearance-none border border-blue-500 focus:border-blue-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-blue-400"
                    placeholder="Your best email…"
                    aria-label="Your best email…"
                    required
                    ref={emailInput}
                  />
                  <button
                    type="submit"
                    class="flex justify-center items-center font-semibold p-2 text-blue-600 bg-blue-100 hover:bg-white shadow"
                  >
                    Subscribe
                  </button>
                </div>
                {submitted && (
                  <p class="mt-2 text-green-500 text-sm">
                    Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </>
  );
};

export default Testimonial;
