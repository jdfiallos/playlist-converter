

const response_type = import.meta.env.REPONSE_TYPE
const client_id = import.meta.env.CLIENT_ID
const scope = import.meta.env.SCOPE
const redirect_uri = import.meta.env.REDIRECT_URI

const params = new URLSearchParams();
	params.append("response_type", response_type);
	params.append("client_id", client_id);
	params.append("scope", scope);
    params.append("redirect_uri", redirect_uri);


const spotifyLoginRedirectUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

export default spotifyLoginRedirectUrl