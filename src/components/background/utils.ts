import { StarProps } from './types';
import { STAR_CONFIG } from './constants';

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function generateStars(count: number): StarProps[] {
  return Array.from({ length: count }, () => ({
    size: random(STAR_CONFIG.SIZE.MIN, STAR_CONFIG.SIZE.MAX),
    top: random(0, 100),
    left: random(0, 100),
    animationDelay: random(0, STAR_CONFIG.ANIMATION.DELAY_MAX),
    duration: random(STAR_CONFIG.ANIMATION.DURATION.MIN, STAR_CONFIG.ANIMATION.DURATION.MAX)
  }));
}