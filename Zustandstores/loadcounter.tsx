import {create} from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'


interface Iprops{

    loadcount:number,
    increaseloadccount:(by:number)=>void

}

export  const useLoadcounter=create<Iprops>()(
    (set)=>({
        loadcount:8,
        increaseloadccount:(by:any)=>set((state)=>({
            loadcount:state.loadcount + by
        }))
    })
)
  
