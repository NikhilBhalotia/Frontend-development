let token = "sepm"
function setAuthToken(token,value,ttl) {
    const now = new Date()
    const item ={
        value: value,
        expiry: now.getTime()+ttl
    }
    localStorage.setItem("password", token)

}
setAuthToken(token)