'use client';
import Image from "next/image";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">Home</h1>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 10 }}>
        <Image
          src="/image.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </motion.div>
      <br/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <Image
          src="/image-3.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </motion.div>
      <br/>
      <motion.div
        animate={{
          scale: [0.5, 1, 1, 0.5, 0.5],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 5 }}>
        <Image
          src="/image-5.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </motion.div>
    </main>
  );
}
