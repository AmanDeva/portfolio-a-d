export const STAR_CONFIG = {
  COUNT: 300, // Number of stars per layer
  SIZE: {
    MIN: 1,
    MAX: 3
  },
  ANIMATION: {
    DELAY_MAX: 20,
    DURATION: {
      MIN: 3,
      MAX: 7
    }
  },
  LAYERS: 4 // Multiple layers for parallax effect
} as const;