/**
 * useProximity Hook
 * 
 * Calculates proximity of an element to the mouse cursor.
 * Writes CSS variables for use in animations.
 */

"use client";

import { useRef, useCallback } from "react";
import { useFrame } from "./use-frame";
import { useReducedMotion } from "./use-reduced-motion";
import { mouse } from "@/lib/motion/mouse";
import { proximity, clamp } from "@/lib/motion/easing";

interface ProximityOptions {
  /** Maximum radius of effect in pixels */
  radius?: number;
  /** Whether the effect is active */
  active?: boolean;
}

/**
 * Track mouse proximity to an element
 * Writes --px, --py, --pd, --pv CSS variables to the element
 * 
 * @param options - Configuration options
 * @returns Ref to attach to the target element
 */
export function useProximity<T extends HTMLElement>(
  options: ProximityOptions = {}
): React.RefObject<T | null> {
  const { radius = 300, active = true } = options;
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  
  const updateProximity = useCallback(
    (_time: number, _delta: number) => {
      if (!ref.current || reducedMotion) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseState = mouse.get();
      const dx = mouseState.current.x - centerX;
      const dy = mouseState.current.y - centerY;
      const dist = Math.hypot(dx, dy);
      
      // Calculate normalized proximity (0 = far, 1 = at center)
      const prox = proximity(dist, radius);
      
      // Calculate relative position within element (-1 to 1)
      const px = clamp(dx / (rect.width / 2), -1, 1);
      const py = clamp(dy / (rect.height / 2), -1, 1);
      
      // Write CSS variables
      ref.current.style.setProperty("--px", px.toFixed(3));
      ref.current.style.setProperty("--py", py.toFixed(3));
      ref.current.style.setProperty("--pd", prox.toFixed(3));
      ref.current.style.setProperty("--pv", mouseState.normalizedSpeed.toFixed(3));
    },
    [radius, reducedMotion]
  );
  
  useFrame(updateProximity, active && !reducedMotion);
  
  return ref;
}
