import arcjet, {
  detectBot,
  protectSignup,
  slidingWindow,
  validateEmail,
} from "@arcjet/next";

const isProd = process.env.NODE_ENV === "production";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    protectSignup({
      email: {
        mode: isProd ? "LIVE" : "DRY_RUN",
        block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
      },
      bots: {
        mode: isProd ? "LIVE" : "DRY_RUN",
        allow: [],
      },
      rateLimit: {
        mode: isProd ? "LIVE" : "DRY_RUN",
        interval: "10m",
        max: 20,
      },
    }),
  ],
});

export const loginRules = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    validateEmail({
      mode: isProd ? "LIVE" : "DRY_RUN",
      deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    }),

    detectBot({
      mode: isProd ? "LIVE" : "DRY_RUN",
      allow: [],
    }),
    slidingWindow({
      mode: isProd ? "LIVE" : "DRY_RUN",
      interval: "1m",
      max: 5,
    }),
  ],
});
export default aj;
