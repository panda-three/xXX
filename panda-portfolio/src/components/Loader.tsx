"use client";

/** 首屏加载指示器：白色圆 + 蓝色旋转环，短暂显示后淡出 */
export default function Loader() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[200] flex items-center justify-center bg-[#f7f7f7] loader-fade">
      <div className="relative h-[50px] w-[50px]">
        <svg className="loader-ring h-full w-full" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#2196f3"
            strokeWidth="4"
            strokeDasharray="90 40"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
