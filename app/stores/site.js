import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => ({
    language: null,
    themetoggled: false,
    _initialized: false,
    _dataInitialized: false
  }),

  actions: {
    // Initialize store with data from storage (call this when store is first used)
    initializeStore() {
      if (this._initialized) return;

      // These will be available as auto-imported composables when called from components
      if (typeof storage !== 'undefined') {
        this.language = storage.getLocal('language');
        this.themetoggled = storage.getLocal('themetoggled', false);
      }

      this._initialized = true;
    },

    updateLanguage(data) {
      // Use storage when available (client-side)
      if (typeof storage !== 'undefined') {
        if (config?.isDev) {
          console.log('store.updateLanguage', data);
        }
        storage?.setLocal('language', data);
      }
      this.language = data;
    }
  },

  getters: {
    
  }
});
