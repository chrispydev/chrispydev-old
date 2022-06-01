import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("Optional");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("Enter your message");
  const [show, setShow] = useState(false);

  const text = `From ${firstName} ${lastName} contact:${phoneNumber} about ${subject} \n ${message}`;

  const data = { subject, email, text };

  function refreshPage() {
    window.location.reload();
  }

  function clearState() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  }

  const sendMail = async (e) => {
    setShow(true);
    e.preventDefault();
    try {
      let res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.message === "Email sent!!!!!") {
        setShow(false);
        alert("Message Sent thank you.");
        clearState();
      } else {
        setTimeout(() => {
          setShow(false);
          alert(
            "took too long to send check internet connection and resend message"
          );
        }, 8000);
      }
    } catch (error) {
      setShow(false);
      alert("Please refreshPage and resend your message");
    }
  };

  return (
    <>
      {show && (
        <>
          <div className="fixed inset-0 flex justify-center items-center bg-darken opacity-70 z-50">
            <div className="lds-hourglass"></div>
          </div>
        </>
      )}
      <form>
        <div className="overflow-hidden sm:rounded-md dark:bg-darker">
          <div className="px-4 py-5 bg-white dark:bg-darker sm:p-6">
            <h4 className="my-4 md:my-10 text-gray-700 dark:text-white">
              Send Me a Message
            </h4>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <label
                  htmlFor="first-name"
                  className="block dark:text-white text-sm font-medium text-gray-700 dark:text-white"
                >
                  First name
                </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                  value={firstName}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 dark:text-white dark:border-dark dark:border-[1px] focus:ring-secondary focus:border-secondary dark:focus:ring-dark dark:focus:border-dark dark:bg-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="last-name"
                  className="block dark:text-white text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                  value={lastName}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 dark:text-white dark:border-dark dark:border-[1px] focus:ring-secondary focus:border-secondary dark:focus:ring-dark dark:focus:border-dark dark:bg-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="email-address"
                  className="block dark:text-white text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  value={email}
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 dark:text-white dark:border-dark dark:border-[1px] focus:ring-secondary focus:border-secondary dark:focus:ring-dark dark:focus:border-dark dark:bg-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="phone-number"
                    className="block dark:text-white text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <label
                    htmlFor="phone-number"
                    className="hidden sm:block text-xs font-thin text-primary"
                  >
                    (Optional)
                  </label>
                </div>
                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  required
                  value={phoneNumber}
                  type="tel"
                  name="subject"
                  id="phone-number"
                  autoComplete="email"
                  className="mt-1 dark:text-white dark:border-dark dark:border-[1px] focus:ring-secondary focus:border-secondary dark:focus:ring-dark dark:focus:border-dark dark:bg-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="subject"
                  className="block dark:text-white text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  required
                  value={subject}
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="email"
                  className="mt-1 dark:text-white dark:border-dark dark:border-[1px] focus:ring-secondary focus:border-secondary dark:focus:ring-dark dark:focus:border-dark dark:bg-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-12">
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm dark:text-white dark:border-dark dark:border-[1px] focus:ring-secondary focus:border-secondary mt-1 block w-full sm:text-sm border dark:focus:ring-dark dark:focus:border-dark dark:bg-gray-500 border-gray-300 rounded-md"
                // placeholder='Enter your message'
                // defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              disabled={
                firstName.length === 0 &&
                  lastName.length === 0 &&
                  email.length === 0 &&
                  subject.length === 0
                  ? true
                  : false
              }
              onClick={(e) => sendMail(e)}
              type="submit"
              className="inline-flex dark:text-white dark:bg-dark justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
