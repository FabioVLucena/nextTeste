interface HeaderProps {
    numero: string;
    email: string;
}

function Header(props: HeaderProps) {

    return(
        <div className="bg-orange-600 w-full h-10 flex flex-row justify-center">
            <div className="w-2/3 flex flex-row items-center">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h1 className="font-sans">
                    {props.numero}
                </h1>
               
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h1 className="font-sans">
                    {props.email}
                </h1>
            
            </div>
        </div>
    )
}

export default Header;