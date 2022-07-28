import HubButton from './HubButton';
import Logo from './Logo';
import SearchIcon from './SearchIcon';

function Hub() {
    return ( 
        <div className="w-full h-24 bg-white flex justify-center items-center">
            <div className="w-2/3 flex flex-row justify-between items-center">
                <Logo />
                <div className='flex flex-row text-zinc-700'>
                    <HubButton label='HOME' link='/#' />
                    <HubButton label='SOBRE NÓS' link='/#' />
                    <HubButton label='SERVIÇOS' link='/#' />
                    <HubButton label='CONTATO' link='/#' />
                    <SearchIcon />
                </div>
            </div>
        </div>
     );
}

export default Hub;