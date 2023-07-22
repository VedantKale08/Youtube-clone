import {create} from 'zustand'

export const sidebarState = create((set) => ({
    isSidebarOpen: true,
    setSidebarOpen : (data) => set(() => ({isSidebarOpen : data})),
}))  