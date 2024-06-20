interface appInterface{
    appwrite:AppWriteService;
    isLoggedIn:boolean;
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>;
    toggle:()=>void;
}

interface typeTooggle{
    toggle:boolean,
    setToggle:Dispatch<SetStateAction<boolean>>
}