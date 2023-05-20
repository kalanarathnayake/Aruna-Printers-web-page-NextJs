const footer = () => {
    return (
        <footer className="container px-4 mx-auto max-w-7xl font-body undefined">
            <div className="fixed bottom-0 left-0 w-full px-4 py-2 mx-auto space-y-8 overflow-hidden bg-blue-200 mt-7 sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="flex px-5 py-2">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                        <a href="" className="pl-2 font-serif text-xl font-bold leading-6 no-underline text-slate-900 hover:text-gray-900">
                            Aruna Printers - <span className="animate-pulse">Bandaragama</span>
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="" className="font-serif font-bold leading-6 text-black no-underline hover:text-pink-900">
                            Contact Us Now <span className="font-mono text-lg text-black animate-pulse"> - </span>
                        </a>
                        {/* <span className="font-mono text-xs text-pink-300">pukfamilydevteam✌️</span> */}
                        <span className="text-lg font-bold text-black">0718002631</span>
                    </div>

                </nav>

            </div>
        </footer>
    );
};

export default footer;
