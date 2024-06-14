import { UserConfig, defineConfig } from 'vitest/config'

export default defineConfig(() => {
  const config: UserConfig = {
    test: {
      include: ['*.test.ts'],
    },
  }

  return config
})
