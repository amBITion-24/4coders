import React from 'react';

const teamMembers = [
  {
    name: "Aditya Mishra",
    title: "Chief Executive Officer",
    description: "Alice has over 15 years of experience in the tech industry, leading teams to success with her visionary approach.",
    role: "Front-end",
    image: "path/to/alice-johnson-image.jpg"
  },
  {
    name: "Adwiteya Juniwal",
    title: "Chief Technology Officer",
    description: "Bob is a tech enthusiast with a passion for blockchain technology and has been instrumental in developing our platform.",
    role: "Front-end",
    image: "path/to/bob-smith-image.jpg"
  },
  {
    name: "Aditya Umesh",
    title: "Lead Developer",
    description: "David is a coding wizard who has been the brain behind the seamless functionality of our platform.",
    role: "Back-end",
    image: "path/to/david-martinez-image.jpg"
  },
  {
    name: "Abhishek Agarwal",
    title: "Head of Marketing",
    description: "Eva is a marketing guru who has a knack for creating compelling campaigns that resonate with our audience.",
    role: "Back-end",
    image: "path/to/eva-green-image.jpg"
  },
];

const MeetTheTeam = () => {
  return (
    <div className="bg-custom-gradient text-white py-10 text-center">
      <h1 className="text-4xl mb-8">Meet the Team</h1>

      <div className="mb-16">
        <h2 className="text-2xl mb-8">Front-end Developers</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {teamMembers
            .filter(member => member.role === "Front-end")
            .map(member => (
              <div className="bg-gray-900 hover:bg-gray-800 shadow-lg rounded-lg p-6 w-60 text-center transform hover:scale-105 transition duration-300 ease-in-out" key={member.name}>
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300" />
                <h3 className="text-xl mb-2">{member.name}</h3>
                <h4 className="text-lg mb-4 text-gray-300">{member.title}</h4>
                <p className="text-sm text-gray-400">{member.description}</p>
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
              <div className="bg-gray-900 hover:bg-gray-800 shadow-lg rounded-lg p-6 w-60 text-center transform hover:scale-105 transition duration-300 ease-in-out" key={member.name}>
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200 hover:border-green-500 transition-colors duration-300" />
                <h3 className="text-xl mb-2">{member.name}</h3>
                <h4 className="text-lg mb-4 text-gray-300">{member.title}</h4>
                <p className="text-sm text-gray-400">{member.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
