interface typeTooggle{
    authState:{
        accessToken: any,
        refreshToken: any,
        authenticated: any,
    },
    setAuthState:Dispatch<SetStateAction<boolean>>,
    getAccessToken:()=>any,
    logout:()=>void,
    toggle:boolean,
    setToggle:Dispatch<SetStateAction<boolean>>
}