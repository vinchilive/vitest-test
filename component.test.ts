import { describe, expect, it, vi } from 'vitest'
import { component } from './component'

const mocks = vi.hoisted(() => ({
  coreUi: vi.fn(() => ({
    default: {
      mobile: false,
    },
  })),
}))

vi.mock('./ui', mocks.coreUi)

describe('test', () => {
  describe('desktop', () => {
    it('can render desktop points form', async () => {
      const res = component()

      console.log(res)

      expect(res).toBeFalsy()
    })
  })
  describe('mobile', () => {
    it('can render mobile points form', async () => {
      mocks.coreUi.mockReturnValueOnce({
        default: {
          mobile: true,
        },
      })

      const res = component()

      console.log(res)

      expect(res).toBeTruthy()
    })
  })
})
