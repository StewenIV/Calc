export const Operation = {
    ModExponentiation: "modExponentiation",
    ModInverse: "modInverse",
} as const

export type Operation = (typeof Operation)[keyof typeof Operation]