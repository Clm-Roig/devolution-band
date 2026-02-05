import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const DevolutionPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f7e9e7',
      100: '#e8c5c1',
      200: '#d4928a',
      300: '#bf6054',
      400: '#a93d2f',
      500: '#581714',
      600: '#4a130f',
      700: '#3b0f0b',
      800: '#2d0b08',
      900: '#1f0704',
    },
  },
  components: {
    progressspinner: {
      colorScheme: {
        light: {
          root: {
            colorOne: '{primary.500}',
            colorTwo: 'white',
            colorThree: '{primary.500}',
            colorFour: 'white',
          },
        },
        dark: {
          root: {
            colorOne: '{primary.500}',
            colorTwo: 'white',
            colorThree: '{primary.500}',
            colorFour: 'white',
          },
        },
      },
    },
  },
})

export default DevolutionPreset
