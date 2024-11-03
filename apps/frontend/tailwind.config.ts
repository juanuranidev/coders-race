import { fontFamily } from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {
      colors: {
        white: {
          "100": "#FFFFFF",
          "200": "#F9F9F9",
          "300": "#EFEFEF",
          "400": "#D6D6D5",
          "500": "#F2F2F2",
          "600": "#BFBFBF",
          "700": "#A6A6A6",
          "800": "#8D8D8D",
          "900": "#737373",
        },
        gray: {
          "100": "#E0E0E0",
          "200": "#BEBEBF",
          "300": "#8A898C",
          "400": "#424244",
          "500": "#323234",
          "600": "#29292A",
          "700": "#1F1F20",
          "800": "#151515",
          "900": "#0C0C0D",
        },
        black: {
          "100": "#E8E8E9",
          "200": "#C4C4C5",
          "300": "#9F9F9F",
          "400": "#19191b",
          "500": "#161618",
          "600": "#121213",
          "700": "#0D0D0E",
          "800": "#09090A",
          "900": "#050506",
        },
        blue: {
          "100": "#E0E8FF",
          "200": "#B3C5FF",
          "300": "#80A1FF",
          "400": "#4D7EFF",
          "500": "#004BDC",
          "600": "#3B5EBE",
          "700": "#003CAA",
          "800": "#002D87",
          "900": "#001F65",
        },
        violet: {
          "100": "#E5DBFF",
          "200": "#C4B3FF",
          "300": "#A28AFF",
          "400": "#8162FF",
          "500": "#6130FF",
          "600": "#7147FF",
          "700": "#5018FF",
          "800": "#4200D1",
          "900": "#3200A1",
        },
        ring: "hsl(var(--ring))",
        input: "hsl(var(--input))",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        md: "`calc(var(--radius) - 2px)`",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
