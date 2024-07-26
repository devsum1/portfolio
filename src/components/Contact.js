import React from 'react';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-900 text-gray-300 p-8">
            <Fade bottom>
            </Fade>
            <div className="flex flex-col gap-y-10 justify-center items-center">
                <h1 className="text-4xl font-bold text-center text-green-600 ">Wanna Talk ?</h1>
                <Fade bottom>
                    <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-lg rounded-lg">
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="769ebcfb-a877-4787-81b0-08f45b9de8ae"/>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2 text-green-500" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    type="text"
                                    id="name"
                                    name='name'
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2 text-green-500" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    type="email"
                                    name='email'
                                    id="email"
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2 text-green-500" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    id="message"
                                    name='message'
                                    placeholder="Enter Your Message"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="px-6 py-2 text-gray-300 bg-green-500 hover:bg-green-700 rounded-lg transition duration-300"
                                    type="submit"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;
