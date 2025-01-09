import Keycloak from "keycloak-js";


const keycloak=new Keycloak({
    url:"http://localhost:9192/",
    realm:"j-dev",
    clientId:"auth-1",
    pkceMethod:"S256"
});


export default keycloak;