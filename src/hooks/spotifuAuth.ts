import axios from 'axios';
import { accessToken as storeAccessToken } from '../store/accessToken';   


const getAccessToken= async (code: string) => {

// const navigate = useNavigate();
const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("client_id",'5b859d87f2aa4ab7bccf9650aa19f62b');
    params.append("redirect_uri", "http://localhost:4321/callback");
    params.append("client_secret",'b405c1a277d342f0ac2139db9d679146');

    const  accessToken = () => axios.post("https://accounts.spotify.com/api/token", params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        const res = await accessToken();

        const access_token = res.data;
            console.log('access_token', access_token);
            
            if (access_token) {
                console.log('access_token', access_token);
                storeAccessToken.set(access_token);
            }     


  const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
    });

    

    // TODO: Guardar en el nano Store
    const data = await result.json();
}