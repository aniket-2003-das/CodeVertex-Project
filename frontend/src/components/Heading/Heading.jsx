import React, { useEffect } from 'react';
import './Heading.css';

const Heading = () => {
  useEffect(() => {
    const headings = document.querySelectorAll('.main-heading');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Adding visible class to:', entry.target); // Debugging
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 10% is visible
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return (
    <div className="main-heading">
      <div className="heading">
        <h1 className="text-3xl font-bold pb-[50px]">
          Our Internship
        </h1>
        <div className="heading-para">
          <p>
          We are passionate about technology and believe in the power of software to transform the world. Our internship program is just one of the ways in which we are investing in the future of the industry
          </p>
        </div>
        <div className="sub-heading">
          <h2>Internship Position</h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
