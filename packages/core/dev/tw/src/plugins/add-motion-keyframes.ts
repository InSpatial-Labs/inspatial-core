// // @ts-ignore
// import plugin from "tailwindcss/plugin";


// export const addMotionKeyframes = plugin(({ addUtilities }) => {
//   // keyframes for the animations
//   addUtilities({
//     // if the user prefers reduced motion, don't apply the transform animations
//     "@media screen and (prefers-reduced-motion: no-preference)": {
//       "@keyframes motion-scale-in": {
//         "0%": {
//           scale: "var(--motion-origin-scale-x) var(--motion-origin-scale-y)",
//         },
//         "100%": {
//           scale: "1 1",
//         },
//       },
//       "@keyframes motion-scale-out": {
//         "0%": {
//           scale: "1 1",
//         },
//         "100%": {
//           scale: "var(--motion-end-scale-x) var(--motion-end-scale-y)",
//         },
//       },
//       "@keyframes motion-translate-in": {
//         "0%": {
//           translate:
//             "var(--motion-origin-translate-x) var(--motion-origin-translate-y)",
//         },
//         "100%": {
//           translate: "0 0",
//         },
//       },
//       "@keyframes motion-translate-out": {
//         "0%": {
//           translate: "0 0",
//         },
//         "100%": {
//           translate:
//             "var(--motion-end-translate-x) var(--motion-end-translate-y)",
//         },
//       },
//       "@keyframes motion-rotate-in": {
//         "0%": {
//           rotate: "var(--motion-origin-rotate)",
//         },
//         "100%": {
//           rotate: "0",
//         },
//       },
//       "@keyframes motion-rotate-out": {
//         "0%": {
//           rotate: "0",
//         },
//         "100%": {
//           rotate: "var(--motion-end-rotate)",
//         },
//       },
//     },
//     "@keyframes motion-filter-in": {
//       "0%": {
//         filter:
//           "blur(var(--motion-origin-blur)) grayscale(var(--motion-origin-grayscale))",
//       },
//       "100%": {
//         filter: "blur(0) grayscale(0)",
//       },
//     },
//     "@keyframes motion-filter-out": {
//       "0%": {
//         filter: "blur(0) grayscale(0)",
//       },
//       "100%": {
//         filter:
//           "blur(var(--motion-end-blur)) grayscale(var(--motion-end-grayscale))",
//       },
//     },
//     "@keyframes motion-opacity-in": {
//       "0%": {
//         opacity: "var(--motion-origin-opacity)",
//       },
//     },
//     "@keyframes motion-opacity-out": {
//       "100%": {
//         opacity: "var(--motion-end-opacity)",
//       },
//     },
//     "@keyframes motion-background-color-in": {
//       "0%": {
//         backgroundColor: "var(--motion-origin-background-color)",
//       },
//     },
//     "@keyframes motion-background-color-out": {
//       "100%": {
//         backgroundColor: "var(--motion-end-background-color)",
//       },
//     },
//     "@keyframes motion-text-color-in": {
//       "0%": {
//         color: "var(--motion-origin-text-color)",
//       },
//     },
//     "@keyframes motion-text-color-out": {
//       "100%": {
//         color: "var(--motion-end-text-color)",
//       },
//     },
//   });
// });
