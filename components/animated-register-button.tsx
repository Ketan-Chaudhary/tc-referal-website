"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedRegisterButtonProps {
  className?: string;
  size?: "default" | "lg" | "xl";
  text?: string;
  subText?: string;
  redirectUrl?: string;
  variant?: "primary" | "secondary";
  referralCode?: string;
  showReferralCode?: boolean;
}

export default function AnimatedRegisterButton({
  className,
  size = "default",
  text = "Register Now",
  subText,
  redirectUrl = "https://www.tcvvip12.com/#/register?invitationCode=vCW7t38771",
  variant = "primary",
  referralCode = "vCW7t38771",
  showReferralCode = true,
}: AnimatedRegisterButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isCodeHighlighted, setIsCodeHighlighted] = useState(false);

  // Pulse animation every 3 seconds
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);

    // Highlight referral code animation
    const highlightInterval = setInterval(() => {
      setIsCodeHighlighted(true);
      setTimeout(() => setIsCodeHighlighted(false), 1500);
    }, 7000);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(highlightInterval);
    };
  }, []);

  const handleClick = () => {
    window.open(redirectUrl, "_blank");
  };

  const sizeClasses = {
    default: "py-3 px-6 text-lg",
    lg: "py-4 px-8 text-xl",
    xl: "py-5 px-10 text-2xl",
  };

  const variantClasses = {
    primary:
      "from-amber-500 to-yellow-300 hover:from-amber-600 hover:to-yellow-400 text-black",
    secondary:
      "from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white",
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative group rounded-lg font-bold transition-all duration-300 bg-gradient-to-r overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        isHovered ? "transform scale-105" : "",
        isPulsing ? "animate-pulse" : "",
        className
      )}
    >
      {/* Enhanced glow effect */}
      <span
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-300 -z-10",
          variantClasses[variant],
          isHovered || isPulsing ? "opacity-70" : ""
        )}
      />

      {/* Button content */}
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="flex items-center gap-2 whitespace-nowrap">
          {text} <ExternalLink className="h-4 w-4" />
        </span>

        {/* Referral code section */}
        {showReferralCode && (
          <div
            className={cn(
              "mt-1 px-3 py-1 rounded-md transition-all duration-300 transform",
              variant === "primary"
                ? "bg-black/20 text-black font-extrabold"
                : "bg-white/20 text-white font-extrabold",
              isCodeHighlighted ? "scale-110 animate-pulse-glow" : ""
            )}
          >
            <span className="text-xs uppercase tracking-wider opacity-80">
              Use Referral Code:
            </span>
            <div
              className={cn(
                "text-xl md:text-2xl font-black tracking-wider mt-0.5",
                isCodeHighlighted ? "text-white animate-pulse" : "",
                variant === "primary" ? "text-black" : "text-amber-300"
              )}
            >
              {referralCode}
            </div>
          </div>
        )}

        {/* Optional subtext */}
        {subText && (
          <span className="text-xs font-normal mt-1 opacity-80">{subText}</span>
        )}
      </div>

      {/* Animated border */}
      <span
        className={cn(
          "absolute inset-0 rounded-lg border-2 border-transparent",
          isHovered ? "border-white/30" : ""
        )}
      />

      {/* Corner sparkles */}
      <span
        className={cn(
          "absolute top-0 left-0 w-3 h-3 bg-white rounded-full opacity-0 transition-opacity duration-300",
          isHovered || isPulsing ? "opacity-70 animate-ping" : ""
        )}
      ></span>
      <span
        className={cn(
          "absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full opacity-0 transition-opacity duration-300",
          isHovered || isPulsing ? "opacity-70 animate-ping" : ""
        )}
      ></span>
    </button>
  );
}
