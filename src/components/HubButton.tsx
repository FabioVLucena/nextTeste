interface HubButtonProps{
    label: string;
    link: string;
}

function HubButton(props: HubButtonProps) {
    return (  
        <a href={props.link} className="relative inline-flex items-center justify-center px-4 overflow-hiden font-mono font-medium tracking-tighter text-gray-600 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-300 rounded-full group-hover:w-16 group-hover:h-16"/>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-14 group-hover:h-14"/>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-300 rounded-full group-hover:w-12 group-hover:h-12"/>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-8 group-hover:h-8"/>
            <span className="relative font-bold text-xl group-hover:text-orange-600">{props.label}</span>
        </a>
    );
}

export default HubButton;
