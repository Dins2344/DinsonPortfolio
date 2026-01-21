import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

//components
import Circles from "/components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7c0fsnn",// process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        "template_0y59nlo",// process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        "xAl10POGNrOzloprd",//process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className=" flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Lets <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form  */}

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group  */}
            <div className="flex gap-x-6 w-full">

              <input type="text" name="name" placeholder="name" className="input" required />
              <input type="email" name="email" placeholder="email" className="input" required />

            </div>

            <input type="text" name="title" placeholder="subject" className="input" required />
            <textarea name="message" placeholder="message" className="textarea" required></textarea>

            <button
              type="submit"
              disabled={loading}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? "Sending..." : "Send"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            {status && <p className="text-accent mt-4">{status}</p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
