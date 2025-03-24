import type { NextConfig } from "next";

// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const NextConfig = (phase: string) : NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    basePath: isDev ? undefined : '/timotee-nextjs',
    assetPrefix: isDev ? undefined : 'https://timotee.github.io/timotee-nextjs/',
  }
  return nextConfig
}

export default NextConfig;
