interface TagProps {
    label: string,
}

function Tag(props: TagProps) {
    return (
        <div className="w-full h-1/6 pb-6 flex flex-row justify-start items-center">
            <span className="w-1 h-5 bg-orange-600" />
            <h1 className="text-xl text-black font-semibold pl-4">{props.label}</h1>
        </div>
    );
}

export default Tag;
