import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profileData } from '../data';
import { Copy, Check } from 'lucide-react';

export default function PersonalIntro() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  return (
    <section 
      id="profile" 
      className="min-h-screen py-24 px-6 sm:px-12 bg-white relative flex items-center select-none"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title Section with full-width thin divider */}
        <div className="text-left mb-12 sm:mb-16 border-b border-neutral-200/50 pb-6">
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-neutral-950">
            关于我
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dossier Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Dossier Pre-header */}
            <div className="mb-8">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase">
                * PERSONAL PROFILE DOSSIER // 简历档案
              </span>
            </div>

            {/* Profile Grid (2 columns) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              
              {/* Name */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  姓名 // NAME
                </span>
                <span className="block text-base font-sans font-semibold text-neutral-900">
                  {profileData.name} / {profileData.engName}
                </span>
              </div>

              {/* Age */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  年龄 // AGE
                </span>
                <span className="block text-base font-sans font-semibold text-neutral-900">
                  {profileData.graduationYear}
                </span>
              </div>

              {/* Gender */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  性别 // GENDER
                </span>
                <span className="block text-base font-sans font-semibold text-neutral-900">
                  男
                </span>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  学历 // EDUCATION
                </span>
                <span className="block text-base font-sans font-semibold text-neutral-900">
                  {profileData.role}
                </span>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  电话 // PHONE
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-mono font-semibold text-neutral-900">
                    {profileData.phone}
                  </span>
                  <button
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    className="flex items-center gap-1 px-2.5 py-1.5 border border-neutral-200 hover:border-neutral-300 bg-[#FAFAFA] hover:bg-neutral-100 rounded-md text-[10px] font-sans text-neutral-500 hover:text-neutral-950 transition-all cursor-pointer"
                  >
                    {copiedText === 'phone' ? (
                      <>
                        <Check size={10} className="text-emerald-600" />
                        <span className="text-emerald-600">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy size={10} />
                        <span>复制</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  邮箱 // EMAIL
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-mono font-semibold text-neutral-900 break-all">
                    {profileData.email}
                  </span>
                  <button
                    onClick={() => handleCopy(profileData.email, 'email')}
                    className="flex items-center gap-1 px-2.5 py-1.5 border border-neutral-200 hover:border-neutral-300 bg-[#FAFAFA] hover:bg-neutral-100 rounded-md text-[10px] font-sans text-neutral-500 hover:text-neutral-950 transition-all cursor-pointer flex-shrink-0"
                  >
                    {copiedText === 'email' ? (
                      <>
                        <Check size={10} className="text-emerald-600" />
                        <span className="text-emerald-600">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy size={10} />
                        <span>复制</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* WeChat */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  微信号 // WECHAT
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-mono font-semibold text-neutral-900">
                    {profileData.wechat}
                  </span>
                  <button
                    onClick={() => handleCopy(profileData.wechat, 'wechat')}
                    className="flex items-center gap-1 px-2.5 py-1.5 border border-neutral-200 hover:border-neutral-300 bg-[#FAFAFA] hover:bg-neutral-100 rounded-md text-[10px] font-sans text-neutral-500 hover:text-neutral-950 transition-all cursor-pointer"
                  >
                    {copiedText === 'wechat' ? (
                      <>
                        <Check size={10} className="text-emerald-600" />
                        <span className="text-emerald-600">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy size={10} />
                        <span>复制</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Comprehensive Evaluation Section */}
            <div className="w-full mt-14 pt-8 border-t border-neutral-100">
              <span className="block text-[10px] font-mono text-neutral-400 tracking-wider uppercase mb-3">
                综合评价 // COMPREHENSIVE EVALUATION
              </span>
              <div className="border-l border-neutral-300 pl-5">
                <p className="text-neutral-600 text-sm md:text-[14.5px] leading-relaxed font-sans font-light">
                  “专注3C数码产品的电商视觉设计，精通C4D、OC/KeyShot渲染及PS后期。在设计工作流中深度结合AIGC技术，擅长将产品材质精准还原，高效打磨极具质感与极简美学的卖点图，为产品注入视觉生命力。”
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Sky-Blue Portrait Image */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-[#3abcf4] rounded-[24px] overflow-hidden flex items-end justify-center group shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* High-quality portrait styled nicely */}
              <img 
                src={profileData.avatar} 
                alt="骆东方"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-103"
              />
              
              {/* Optional slight dark gradient on bottom edge to match hoodie transition */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
