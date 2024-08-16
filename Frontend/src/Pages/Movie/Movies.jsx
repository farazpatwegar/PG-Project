import React from 'react';
import poster1 from '../../asset/images/poster1.jpg';
import poster2 from '../../asset/images/poster2.jpg';
import poster3 from '../../asset/images/poster3.jpg';

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: poster1,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: poster2,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: poster3,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export default function Movies() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 min-h-screen py-12">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-white">POPULAR MOVIES</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative transform transition duration-500 hover:scale-110"
              >
                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-72">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black rounded-full p-2 shadow-lg hover:scale-110 transform transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 22V2l18 10-18 10z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <h3 className="mt-6 text-lg text-white group-hover:text-pink-400">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-300">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
