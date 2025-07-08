// components/SkeletonCard.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCard() {
  return (
    <div className="border rounded p-4 shadow space-y-3">
      <Skeleton height={160} /> {/* ảnh */}
      <Skeleton height={20} width={`75%`} /> {/* title */}
      <Skeleton height={18} width={`50%`} /> {/* category */}
      <Skeleton height={24} width={`30%`} /> {/* price */}
    </div>
  );
}
