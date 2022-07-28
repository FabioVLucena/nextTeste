interface ButtonProps{
    label: string;
    link: string;
}

function Button(props: ButtonProps) {
    return (  
        <a href={props.link} className="w-40 h-12 rounded-full bg-orange-600 relative inline-flex items-center justify-center overflow-hidden font-mono font-medium tracking-tighter hover:bg-black">
            <span className="relative font-bold text-xl text-white">{props.label}</span>
        </a>
    );
}

export default Button;