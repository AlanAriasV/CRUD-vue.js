import {config} from 'dotenv'
config()
console.log(process.env.NICKNAME)

export default{
    dbUser: process.env.USER || "",
    dbPassword: process.env.PASSWORD || "",
    port: process.env.PORT || ""
}