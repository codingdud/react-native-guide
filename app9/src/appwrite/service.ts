import {ID,Account,Client} from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

const appwriteClient=new Client()
const APPWRITE_ENDPOINT:string=Config.APPWRITE_ENDPOINT!
const APPWRITE_PROJECT_ID:string=Config.APPWRITE_PROJECT_ID!

type CreateUserAccount={
    email:string,
    password:string,
    name:string
}
type LoginUserAccount={
    email:string,
    password:string,
}

class AppWriteService{
    account;
    constructor(){
        appwriteClient
        //connect
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account=new Account(appwriteClient)
    }
    createAccount=async({email,password,name}:CreateUserAccount)=>{
        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                Snackbar.show({
                    text:'Account created successfully',
                    duration:Snackbar.LENGTH_LONG,
                })
                return this.loginAccount({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG,
            })
            console.log("appwrite ::"+error)
        }
        
    }
    loginAccount=async({email,password}:LoginUserAccount)=>{
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG,
            })
            console.log("appwrite login::"+error)
        }
    }
    getCurrentUser=async()=>{
        try {
            return await this.account.get()
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG,
            })
            console.log("appwrite get user::"+error)
        }
    }
    logoutUser=async()=>{
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG,
            })
            console.log("appwrite logout::"+error)
        }
    }
}

export default  AppWriteService