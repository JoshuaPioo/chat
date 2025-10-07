import {create} from 'zustand'

export const useAuthStore = create((set) => ({
    authUser : {name:"Josh",_id:123, age:22},
    isLoggedIn: false,
    isLoading: false,

    login: () => {
        console.log ("Logging in...");
        set ({isLoggedIn: true, isLoading: true});
        
    }
}));