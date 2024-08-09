import Link from "next/link";
import React from "react";

const page: React.FC = () => (
  <div>
    <h1>Welcome to the Test Application</h1>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="Test Video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <Link href="/Routes/gptVetting/CandidateInterview/skills">
      <button>Start</button>
    </Link>
  </div>
);

export default page;
