import {defineStore} from 'pinia'


interface AuthState {
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
  }),
  actions: {
    setAuthenticated(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
    },
  },
});