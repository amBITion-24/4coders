import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const teamMembers = [
  {
    name: "Aditya Mishra",
    title: "Team leader",
    description: "Aditya Mishra, known for his long naps, always gets the most sleep in the group, ensuring he's well-rested every day.",
    role: "Front-end",
    image: "src/assets/img/mishra.png",
    github: "https://github.com/adityamishra139",
    linkedin: "https://www.linkedin.com/in/aditya-mishra-02b027286/",
    instagram: "https://instagram.com/adityamishra"
  },
  {
    name: "Adwiteya Juniwal",
    title: "Design-In-Charge",
    description: "Hi! I'm Adwiteya Juniwal, a Robotics and AI engineering student at BIT. I love AI, Cybersecurity, Project Management, and Innovation.",
    role: "Front-end",
    image: "src/assets/img/Adwiteya.jpg",
    github: "https://github.com/Junni007",
    linkedin: "http://www.linkedin.com/in/junni-adi",
    instagram: "https://instagram.com/adwiteya"
  },
  {
    name: "Aditya Umesh",
    title: "Back-End engineer",
    description: "Aditya Umesh is a coding wizard who has been the brain behind the seamless functionality of our platform.",
    role: "Back-end",
    image: "src/assets/img/Umesh.jpg",
    github: "https://github.com/aditya-1708",
    linkedin: "https://www.linkedin.com/in/aditya-umesh-b577651a8/",
    instagram: "https://instagram.com/adityaumesh"
  },
  {
    name: "Abhishek Agarwal",
    title: "Back-End Engineer",
    description: "Abhishek is a Coding guru who has a knack for creating compelling backend codes that resonate with our users.",
    role: "Back-end",
    image: "src/assets/img/abhishek.jpg",
    github: "https://github.com/iamabhishekagarwal",
    linkedin: "https://www.linkedin.com/in/abhishek-agarwal-8b78552a6/",
    instagram: "https://instagram.com/abhishekagarwal"
  },
];

const MeetTheTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-custom-gradient text-white py-10 text-center">
      <h1 className="text-4xl mb-8">Meet the Team</h1>

      <div className="mb-16">
        <h2 className="text-2xl mb-8">Front-end Developers</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {teamMembers
            .filter(member => member.role === "Front-end")
            .map(member => (
              <div className="bg-gray-900 hover:bg-gray-800 shadow-lg rounded-lg p-6 w-60 text-center transform hover:scale-105 transition duration-300 ease-in-out" key={member.name} data-aos="fade-up">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300" />
                <h3 className="text-xl mb-2">{member.name}</h3>
                <h4 className="text-lg mb-4 text-gray-300">{member.title}</h4>
                <p className="text-sm text-gray-400">{member.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl mb-8">Back-end Developers</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {teamMembers
            .filter(member => member.role === "Back-end")
            .map(member => (
              <div className="bg-gray-900 hover:bg-gray-800 shadow-lg rounded-lg p-6 w-60 text-center transform hover:scale-105 transition duration-300 ease-in-out" key={member.name} data-aos="fade-up">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200 hover:border-green-500 transition-colors duration-300" />
                <h3 className="text-xl mb-2">{member.name}</h3>
                <h4 className="text-lg mb-4 text-gray-300">{member.title}</h4>
                <p className="text-sm text-gray-400">{member.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
