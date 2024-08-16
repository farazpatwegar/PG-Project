import React from 'react';
import banner1 from '../../asset/images/banner1.jpg';

const teamMembers = [
  {
    name: 'Faraz Patwegar',
    href: 'https://www.instagram.com/faraz_patwegar/',
    role: 'Project Lead & UI/UX Designer',
    description: 'Faraz is the visionary behind My Showz Entertainment. With expertise in full-stack development, Faraz ensures the platform delivers a seamless and engaging user experience.',
  },
  {
    name: 'Utkarsha Chinde',
    href: 'https://www.instagram.com/utkarshaa_7768/',
    role: 'Developer',
    description: 'Utkarsha brings creativity and design expertise to the team. Her designs are the backbone of the platform\'s modern and user-friendly interface.',
  },
  {
    name: 'Harshal Waghchaure',
    href: 'https://www.instagram.com/harsh__waghchaure/',
    role: 'Project Guide',
    description: 'Harshal specializes in building robust and scalable back-end systems. His work ensures that My Showz Entertainment runs smoothly behind the scenes.',
  },
];

const stats = [
  { name: 'Movies', value: '65' },
  { name: 'Shows', value: '165' },
  { name: 'Staff Members', value: '463' },
  { name: 'No. of Users', value: '5063' },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={banner1}
        style={{
          filter: 'blur(8px)',
          WebkitFilter: 'blur(8px)', // For Safari and older browsers
        }}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">My Showz Entertainment</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {teamMembers.map((member) => (
              <a key={member.name} href={member.href}>
                {member.name} - {member.role} <span aria-hidden="true">&rarr;</span>
                <p className="text-sm text-gray-400">{member.description}</p>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
