import React, { createContext, useContext, useState, useEffect } from 'react';
import soundManager from '../services/soundService';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabledState] = useState(soundManager.isSoundEnabled());

  const toggleSound = () => {
    const next = !soundEnabled;
    soundManager.setSoundEnabled(next);
    setSoundEnabledState(next);
  };

  const playCorrect = () => soundManager.playCorrect();
  const playPartial = () => soundManager.playPartial();
  const playWrong = () => soundManager.playWrong();

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playCorrect, playPartial, playWrong }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
