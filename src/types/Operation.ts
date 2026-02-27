export const Operation = {
    ModExponentiation: "modExponentiation",
    ModInverse: "modInverse",
    GCD: "gcd"
} as const

export type Operation = (typeof Operation)[keyof typeof Operation]