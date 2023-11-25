import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Action {
  userstate: boolean;
  username: string;
  setUsername: (name: string) => void;
  setUserstate: (user: boolean) => void;
}

export const userStore = create<Action>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (username: string) =>
        set({
          username,
        }),
      userstate: false,
      setUserstate: () => {
        set({
          userstate: true,
        });
      },
    }),
    {
      // ...
      skipHydration: true,

      name: "userauthstore",
    }
  )
);
