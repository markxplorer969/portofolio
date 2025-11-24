"use client";

import { motion } from "framer-motion";
import { Play, SkipBack, SkipForward, Plus, MoreHorizontal, Shuffle, Repeat } from "lucide-react";

const SpotifyWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-md bg-[#181818] rounded-[32px] p-6 shadow-2xl border border-zinc-800/50"
    >
      {/* --- Top Section: Album & Tracks --- */}
      <div className="flex gap-6 mb-6">
        {/* Album Art */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-900 to-zinc-800 rounded-md shadow-lg flex items-center justify-center text-zinc-500 overflow-hidden">
             {/* Placeholder Image or Abstract Art */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
          </div>
        </div>

        {/* Track List */}
        <div className="flex flex-col gap-3 w-full">
            {/* Header / Spotify Icon */}
            <div className="flex justify-end">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1DB954]">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
            </div>

            {/* Tracks */}
            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3 text-white font-medium">
                    <span className="text-green-500 w-4">1</span>
                    <div className="flex flex-col leading-tight">
                        <span>Berubah</span>
                        <span className="text-[10px] text-zinc-400 font-normal">Tenxi</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                    <span className="w-4">2</span>
                    <div className="flex flex-col leading-tight">
                        <span>Bintang 5</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                    <span className="w-4">3</span>
                    <div className="flex items-center gap-1.5 leading-tight">
                        <span className="bg-zinc-600 text-[8px] px-1 rounded text-zinc-200">E</span>
                        <span>So Asu</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Bottom Section: Player Controls --- */}
      <div>
        <p className="text-[10px] font-medium text-zinc-400 mb-2 tracking-wide">
          On repeat • Mark
        </p>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-zinc-700 rounded-full mb-4 overflow-hidden">
             <div className="h-full w-1/3 bg-white rounded-full" />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-zinc-400">
                <Shuffle className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
                <SkipBack className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            </div>

            <div className="bg-white rounded-full p-3 hover:scale-105 transition-transform cursor-pointer">
                <Play className="w-6 h-6 text-black fill-current translate-x-0.5" />
            </div>

            <div className="flex items-center gap-4 text-zinc-400">
                <SkipForward className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                <Plus className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotifyWidget;