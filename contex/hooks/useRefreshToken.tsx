import axios from '../api/axios';
import { useTogoContext } from './contex'; 

const useRefreshToken = () => {
    const { authState,setAuthState} = useTogoContext();
    const data = {
        // Example data you want to send
        refreshToken: authState.refreshToken,
    };
    const refresh = async () => {
        const response = await axios.post('/users/refreshTokenMobil', data,{
            withCredentials: true,
        });
        console.log("exire tokenr",authState.accessToken);
        console.log("new tokenr",response.data.accessToken);
        setAuthState({...authState,accessToken:response.data.accessToken})
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;