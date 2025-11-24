'use client';

import { motion } from 'framer-motion';
import SpotifyWidget from '@/components/shared/SpotifyWidget';

const FavoritePlaylist = () => {
  return (
    <section className="py-24 flex flex-col items-center justify-center bg-zinc-950 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] rounded-full w-64 h-64 absolute" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            On Repeat
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Coding vibes & late night jams.
          </p>
        </motion.div>

        {/* Spotify Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            ease: 'easeOut',
            delay: 0.3
          }}
          className="flex justify-center"
        >
          <SpotifyWidget />
        </motion.div>
      </div>
    </section>
  );
};

export default FavoritePlaylist;