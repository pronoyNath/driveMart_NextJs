/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsHmrCache: false, //default: true
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "jwiqsdciqlixheuwfhvc.supabase.co", //telling nextjs to allow images from this domain
          },
        ],
      },
};

export default nextConfig;


// for current fake deployment
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverComponentsHmrCache: false, //default: true
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "jwiqsdciqlixheuwfhvc.supabase.co", //telling nextjs to allow images from this domain
//       },
//     ],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;
