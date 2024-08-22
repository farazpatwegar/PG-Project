import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Movie', href: '/movie' },
  { name: 'Contact Us', href: '/contactus' },
  { name: 'About', href: '/about' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('user'));
  const isLoggedIn = Boolean(user);
  const userId = user?.userId;

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    if (!userId) {
      alert('User not found. Please log in again.');
      return;
    }

    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const response = await fetch(`http://localhost:8080/admin/deleteUser/${userId}`, { method: 'DELETE' });

        if (response.ok) {
          alert('Account deleted successfully.');
          sessionStorage.clear();
          navigate('/login');
        } else {
          const errorData = await response.json();
          alert(`Failed to delete account: ${errorData.message || 'Unknown error'}`);
        }
      } catch (error) {
        alert('An error occurred while deleting the account.');
      }
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://img.icons8.com/?size=100&id=nMSSSpYre8pz&format=png&color=000000"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/search">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Search</span>
              </button>
            </Link>
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">View notifications</span>
            </button>

            {isLoggedIn ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white">
                    <UserCircleIcon className="h-8 w-8 text-gray-400 hover:text-white" />
                    <span className="sr-only">Open user menu</span>
                  </Menu.Button>
                </div>
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="p-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/updateprofile"
                          state={{ user }}
                          className={classNames(
                            active ? 'bg-gray-600 text-white' : 'text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Update Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/showtickets"
                          state={{ user }}
                          className={classNames(
                            active ? 'bg-gray-600 text-white' : 'text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Show Tickets
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleDeleteAccount}
                          className={classNames(
                            active ? 'bg-gray-600 text-white' : 'text-gray-300',
                            'block w-full text-left px-4 py-2 text-sm'
                          )}
                        >
                          Delete Account
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={classNames(
                            active ? 'bg-gray-600 text-white' : 'text-gray-300',
                            'block w-full text-left px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            ) : (
              <Link
                to="/login"
                className="ml-3 text-white bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
