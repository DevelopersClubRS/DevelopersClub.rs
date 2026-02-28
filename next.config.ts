import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
        // This captures the date at the exact moment 'next build' is run
        NEXT_PUBLIC_BUILD_DATE: new Date().toLocaleString(),
    },
};

export default nextConfig;
