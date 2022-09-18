
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        // WEBPACK VARIABLES
        MAIN_WINDOW_WEBPACK_ENTRY: string,
        MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

        // OUR VARIABLES
        NODE_ENV: 'development' | 'homolog' | 'production',
        APP_TITLE: string
      }
    }
}

// REMINDER - WHY EXPORTING NOTHING IS IMPORTANT FOR D.TS???
export {}