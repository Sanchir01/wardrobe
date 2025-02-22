import { create } from 'zustand'

export interface IUseSwitchHeader {
	switchHeader: boolean
	setSwitchHeader: () => void
}

export const useSwitchHeader = create<IUseSwitchHeader>((set, get) => ({
	switchHeader: false,
	setSwitchHeader: () => set({ switchHeader: !get().switchHeader })
}))

// export const useBurger = create(set => ({
// 	burger: false
// }))
