import React from 'react';
import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const MyFooter = () => {
  const accounts = [
    {
      name: "Adem Meddeb",
      github: "https://github.com/Adem-meddeb",
      linkedin: "https://www.linkedin.com/in/adem-meddeb-750ab5261/"
    },
    {
      name: "Assia Ferjani",
      github: "https://github.com/assiaferjani",
      linkedin: "https://www.linkedin.com/in/assia-ferjani-066589330/?fbclid=IwY2xjawHNZR5leHRuA2FlbQIxMAABHW-NTOQvjOWfutOwVKAPhq-iNK7t2Y2FYjzwB6Lekou8cY-hlBDTZtU7Bw_aem_D1-dtMgxGNlMSfHV8xNZQA"
    },
    {
      name: "Ines MK",
      github: "https://github.com/Ines55MK",
      linkedin: "https://www.linkedin.com/in/makhlouf-ines-5a44b02a6/?fbclid=IwY2xjawHNZPhleHRuA2FlbQIxMAABHQBaOkPBlAvP4OOAr7S9RHL8NKrihZZBfhZEYLYS8J8n-JCCcIItV5kqWA_aem_rhbyXnhe-9vwZjZv2B6mhQ"
    },
    {
      name: "Firas Mhemdi",
      github: "https://github.com/firasmhemdi",
      linkedin: "https://www.linkedin.com/in/firas-mhemdi-730260255/"
    },
  ];

  return (
    <Footer bgDark className="mt-20 rounded-tl-md">
      <div className="w-full px-4 lg:px-24">
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Online Events™ " year={2024} />
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-6 sm:mt-0 sm:justify-center">
            {accounts.map((account, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icônes en ligne */}
                <div className="flex space-x-4">
                  {/* Icône GitHub */}
                  <a
                    href={account.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <BsGithub className="h-6 w-6" />
                  </a>
                  {/* Icône LinkedIn */}
                  <a
                    href={account.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition"
                  >
                    <BsLinkedin className="h-6 w-6" />
                  </a>
                </div>
                {/* Nom du compte */}
                <p className="text-sm text-gray-300 mt-2">{account.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
