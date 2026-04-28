/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true
      },
      {
        source: '/what-we-do',
        destination: '/millwork/what-we-do',
        permanent: true
      },
      {
        source: '/what-we-do/:path*',
        destination: '/millwork/what-we-do/:path*',
        permanent: true
      },
      {
        source: '/gallery',
        destination: '/millwork/gallery',
        permanent: true
      },
      {
        source: '/gallery/:path*',
        destination: '/millwork/gallery/:path*',
        permanent: true
      },
      {
        source: '/about',
        destination: '/millwork/about',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/millwork/contact',
        permanent: true
      },
      {
        source: '/metal-fabrication',
        destination: '/metal',
        permanent: true
      },
      {
        source: '/metal-fabrication/:path*',
        destination: '/metal/:path*',
        permanent: true
      }
    ]
  }
}

export default nextConfig
