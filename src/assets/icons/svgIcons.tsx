import { FC } from 'react';

const prefix = 'icon';

const files = {
  byId: {
    search: {
      width: 23.991,
      height: 23.991,
      viewBox: [0, 0, 23.991, 23.991],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M23.663,3.258a1.131,1.131,0,0,1,0,1.593L22.351,6.163a1.131,1.131,0,0,1-1.593,0L16.072,1.477a1.085,1.085,0,0,1-.328-.8v-.75a9.443,9.443,0,0,1-6,2.062A9.388,9.388,0,0,1,2.858-.865,9.388,9.388,0,0,1,0-7.754a9.388,9.388,0,0,1,2.858-6.888A9.388,9.388,0,0,1,9.746-17.5a9.388,9.388,0,0,1,6.888,2.858,9.388,9.388,0,0,1,2.858,6.888,9.443,9.443,0,0,1-2.062,6h.75a1.085,1.085,0,0,1,.8.328ZM5.482-3.49A5.9,5.9,0,0,0,9.746-1.756a5.779,5.779,0,0,0,4.241-1.757,5.779,5.779,0,0,0,1.757-4.241,5.779,5.779,0,0,0-1.757-4.241,5.779,5.779,0,0,0-4.241-1.757,5.779,5.779,0,0,0-4.241,1.757A5.779,5.779,0,0,0,3.749-7.754,5.9,5.9,0,0,0,5.482-3.49Z" transform="translate(0 17.5)"/>'
    },
    menu: {
      width: 25.68,
      height: 22.47,
      viewBox: [0, 0, 25.68, 22.47],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M.917-8a.893.893,0,0,1-.659-.258A.893.893,0,0,1,0-8.915v-2.293a.893.893,0,0,1,.258-.659.893.893,0,0,1,.659-.258H24.763a.893.893,0,0,1,.659.258.893.893,0,0,1,.258.659v2.293a.893.893,0,0,1-.258.659A.893.893,0,0,1,24.763-8Zm0,9.171A.893.893,0,0,1,.258.915.893.893,0,0,1,0,.256V-2.037A.893.893,0,0,1,.258-2.7a.893.893,0,0,1,.659-.258H24.763a.893.893,0,0,1,.659.258.893.893,0,0,1,.258.659V.256a.893.893,0,0,1-.258.659.893.893,0,0,1-.659.258Zm0,9.171A.883.883,0,0,1,0,9.428V7.135a.883.883,0,0,1,.917-.917H24.763a.883.883,0,0,1,.917.917V9.428a.883.883,0,0,1-.917.917Z" transform="translate(0 12.125)"/>'
    },
    comment: {
      width: 14,
      height: 12.25,
      viewBox: [0, 0, 14, 12.25],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M7-11.375a8.032,8.032,0,0,1,3.514.766,6.581,6.581,0,0,1,2.543,2.064A4.755,4.755,0,0,1,14-5.687a4.755,4.755,0,0,1-.943,2.857A6.581,6.581,0,0,1,10.514-.766,8.032,8.032,0,0,1,7,0,8.69,8.69,0,0,1,4.457-.383,6.46,6.46,0,0,1,.656.875.628.628,0,0,1,.3.766.683.683,0,0,1,.055.479.573.573,0,0,1,.014.109.615.615,0,0,1,.178-.205,6.5,6.5,0,0,0,.656-.82a5.624,5.624,0,0,0,.793-1.422A4.888,4.888,0,0,1,0-5.687,4.755,4.755,0,0,1,.943-8.545a6.581,6.581,0,0,1,2.543-2.064A8.032,8.032,0,0,1,7-11.375ZM7-1.312A6.876,6.876,0,0,0,9.844-1.9a5.215,5.215,0,0,0,2.078-1.6,3.553,3.553,0,0,0,.766-2.187,3.553,3.553,0,0,0-.766-2.187,5.215,5.215,0,0,0-2.078-1.6A6.876,6.876,0,0,0,7-10.062a6.876,6.876,0,0,0-2.844.588,5.215,5.215,0,0,0-2.078,1.6,3.553,3.553,0,0,0-.766,2.187A3.61,3.61,0,0,0,2.406-3.145l.547.6-.273.766A9.016,9.016,0,0,1,2.133-.656a5.57,5.57,0,0,0,1.559-.82l.547-.355.629.191A7.041,7.041,0,0,0,7-1.312Z" transform="translate(0 11.375)"/>'
    },
    facebook: {
      width: 11.238,
      height: 21,
      viewBox: [0, 0, 11.238, 21],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#17d4e9" d="M11.443-6.562H8.367V2.625h-4.1V-6.562H.943v-3.814H4.266v-2.871a5.838,5.838,0,0,1,.615-2.789A4.124,4.124,0,0,1,6.624-17.78a5.5,5.5,0,0,1,2.6-.595q.656,0,1.395.062a10.765,10.765,0,0,1,1.148.144l.41.041v3.24H10.541a2.084,2.084,0,0,0-1.661.595,2.153,2.153,0,0,0-.513,1.456v2.461h3.65Z" transform="translate(-.943 18.375)"/>'
    },
    instagram: {
      width: 21,
      height: 21,
      viewBox: [0, 0, 21, 21],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#17d4e9" d="M6.7-12.8a5.238,5.238,0,0,1,3.844-1.594,5.2,5.2,0,0,1,3.82,1.57A5.2,5.2,0,0,1,15.938-9a5.2,5.2,0,0,1-1.57,3.82,5.2,5.2,0,0,1-3.82,1.57,5.2,5.2,0,0,1-3.82-1.57A5.2,5.2,0,0,1,5.156-9,5.162,5.162,0,0,1,6.7-12.8ZM8.063-6.516a3.386,3.386,0,0,0,2.484,1.031,3.386,3.386,0,0,0,2.484-1.031A3.386,3.386,0,0,0,14.063-9a3.386,3.386,0,0,0-1.031-2.484,3.386,3.386,0,0,0-2.484-1.031,3.386,3.386,0,0,0-2.484,1.031A3.386,3.386,0,0,0,7.031-9,3.386,3.386,0,0,0,8.063-6.516Zm8.953-8.953a1.07,1.07,0,0,1,.375.844,1.258,1.258,0,0,1-.352.891,1.142,1.142,0,0,1-.867.375,1.217,1.217,0,0,1-.891-.375,1.217,1.217,0,0,1-.375-.891,1.142,1.142,0,0,1,.375-.867,1.258,1.258,0,0,1,.891-.352A1.07,1.07,0,0,1,17.016-15.469ZM21-13.312q.047,1.266.047,4.313T21-4.687a6.465,6.465,0,0,1-1.711,4.43,6.3,6.3,0,0,1-4.43,1.664q-1.266.094-4.312.094T6.234,1.406A6.433,6.433,0,0,1,1.828-.281,4.524,4.524,0,0,1,.844-1.594,6.632,6.632,0,0,1,.3-3.047,7.278,7.278,0,0,1,.141-4.687Q.047-5.953.047-9t.094-4.359a6.37,6.37,0,0,1,1.688-4.359,6.316,6.316,0,0,1,4.406-1.734Q7.5-19.5,10.547-19.5t4.313.047a6.465,6.465,0,0,1,4.43,1.711A6.465,6.465,0,0,1,21-13.312Zm-2.25,10.5a5.084,5.084,0,0,0,.234-.961q.094-.586.141-1.406t.047-1.336v-4.969q0-.516-.047-1.336t-.141-1.406a5.084,5.084,0,0,0-.234-.961A3.383,3.383,0,0,0,16.734-17.2a5.084,5.084,0,0,0-.961-.234q-.586-.094-1.406-.141t-1.312-.047H8.063q-.516,0-1.336.047t-1.406.141a5.084,5.084,0,0,0-.961.234,3.383,3.383,0,0,0-2.016,2.016,5.084,5.084,0,0,0-.234.961q-.094.586-.141,1.406t-.047,1.313v4.5q0,.445.023,1.148t.07,1.2q.047.492.141,1.008t.188.844A3.554,3.554,0,0,0,4.359-.8a5.084,5.084,0,0,0,.961.234q.586.094,1.406.141t1.313.047h4.992q.516,0,1.336-.047t1.406-.141A5.084,5.084,0,0,0,16.734-.8,3.554,3.554,0,0,0,18.75-2.812Z" transform="translate(-.047 19.5)"/>'
    },
    play: {
      width: 42,
      height: 42,
      viewBox: [0, 0, 42, 42],
      data: '<g xmlns="http://www.w3.org/2000/svg" transform="translate(-690 -497.667)"><circle cx="21" cy="21" r="21" fill="#00b8ce" transform="translate(690 497.666)"/><path fill="#fff" d="M5.848,0,11.7,10.1H0Z" transform="rotate(90 102.277 615.163)"/></g>'
    },
    twitter: {
      width: 21,
      height: 17.063,
      viewBox: [0, 0, 21, 17.063],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#17d4e9" d="M18.826-12.141a2.443,2.443,0,0,1,.041.533,12.075,12.075,0,0,1-.82,4.327,13.642,13.642,0,0,1-2.317,3.938A11.053,11.053,0,0,1,11.854-.451,12.287,12.287,0,0,1,6.6.656,11.949,11.949,0,0,1,0-1.271q.451.041,1.025.041A8.538,8.538,0,0,0,6.4-3.076a4.006,4.006,0,0,1-2.522-.841,4.283,4.283,0,0,1-1.5-2.112q.41.041.779.041a5.467,5.467,0,0,0,1.148-.123,4.184,4.184,0,0,1-1.764-.82,4.494,4.494,0,0,1-1.23-1.5,4.127,4.127,0,0,1-.451-1.907v-.082a4.055,4.055,0,0,0,1.928.574A4.139,4.139,0,0,1,.861-13.453a4.158,4.158,0,0,1,.615-2.174,11.876,11.876,0,0,0,3.917,3.2,11.922,11.922,0,0,0,4.942,1.313,5.978,5.978,0,0,1-.082-.984A4.177,4.177,0,0,1,11.5-15.135a4.076,4.076,0,0,1,3.015-1.271,4.157,4.157,0,0,1,3.158,1.354,8.762,8.762,0,0,0,2.748-1.025A4.274,4.274,0,0,1,18.539-13.7,9.251,9.251,0,0,0,21-14.4,9.467,9.467,0,0,1,18.826-12.141Z" transform="translate(0 16.406)"/>'
    },
    'footer-repeat': {
      width: 187,
      height: 207,
      viewBox: [0, 0, 187, 207],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#261e1f" d="M0 0H187V207H0z"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M14.249,0,28.411,38.161H0Z" transform="translate(41.795 18)"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M3.806,10.193,7.588,0H0Z" transform="translate(38.001 78.394)"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M3.806,10.193,7.588,0H0Z" transform="translate(66.413 78.394)"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M0,0V8.061H12.018V41.686H21.45V8.061h12.54V0Z" transform="translate(38.804 63.548)"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M14.249,38.161,28.411,0H0Z" transform="translate(116.795 150.839)"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M3.806,0,7.588,10.193H0Z" transform="translate(113.001 118.413)"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M3.806,0,7.588,10.193H0Z" transform="translate(141.413 118.413)"/><path xmlns="http://www.w3.org/2000/svg" fill="#2f2728" d="M0,41.686V33.625H12.018V0H21.45V33.625h12.54v8.061Z" transform="translate(113.804 101.766)"/>'
    },
    'logo-black': {
      width: 623.98,
      height: 131.425,
      viewBox: [0, 0, 623.98, 131.425],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M21.329,0l21.2,57.278H0Z" transform="translate(331.077)"/><path xmlns="http://www.w3.org/2000/svg" d="M5.7,15.3,11.358,0H0Z" transform="translate(325.398 90.649)"/><path xmlns="http://www.w3.org/2000/svg" d="M5.7,15.3,11.358,0H0Z" transform="translate(367.924 90.649)"/><path xmlns="http://www.w3.org/2000/svg" d="M65.34-63,39.87.45H27.63L2.16-63h15.3L33.93-18.63,50.4-63ZM96.3,0H82.44V-63H96.3Zm76.95,0h-16.2l-13.5-20.16H132.66V0H118.8V-63h28.8q11.16,0,17.46,5.535t6.3,15.255v.18q0,14.49-13.5,19.53ZM157.32-41.31v-.18a8.063,8.063,0,0,0-2.88-6.705q-2.88-2.295-8.01-2.295H132.66V-32.4H146.7q4.95,0,7.785-2.43A8.106,8.106,0,0,0,157.32-41.31ZM252,0H237.51l-5.76-14.13H205.11L199.35,0H185.22l27-63.45H225ZM226.8-26.37,218.43-46.8l-8.37,20.43ZM313.74,0H268.47V-63h13.86v50.4h31.41Z" transform="translate(-2.16 130.975)"/><path xmlns="http://www.w3.org/2000/svg" d="M55.26-50.22H36.09V0H22.23V-50.22H3.06V-63h52.2ZM127.08,0h-16.2L97.38-20.16H86.49V0H72.63V-63h28.8q11.16,0,17.46,5.535t6.3,15.255v.18q0,14.49-13.5,19.53ZM111.15-41.31v-.18a8.063,8.063,0,0,0-2.88-6.705q-2.88-2.295-8.01-2.295H86.49V-32.4h14.04q4.95,0,7.785-2.43A8.106,8.106,0,0,0,111.15-41.31ZM158.94,0H145.08V-63h13.86Zm76.05-17.28q0,8.46-6.3,12.87T211.41,0H181.44V-63h29.25q9.63,0,15.21,4.41a14.353,14.353,0,0,1,5.58,11.88v.18q0,8.91-8.28,13.59a20.832,20.832,0,0,1,8.82,5.85q2.97,3.6,2.97,9.63ZM217.71-44.19v-.18a5.544,5.544,0,0,0-2.34-4.815q-2.34-1.665-6.75-1.665H194.94v13.32h12.78Q217.71-37.53,217.71-44.19Zm3.51,25.2v-.18q0-6.84-10.26-6.84H194.94v13.86h16.47Q221.22-12.15,221.22-18.99ZM301.14,0H253.17V-63h47.52v12.33H266.94v12.78h29.7v12.33h-29.7v13.23h34.2Z" transform="translate(322.84 130.975)"/>'
    },
    'logo-white': {
      width: 623.98,
      height: 131.425,
      viewBox: [0, 0, 623.98, 131.425],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M21.329,0l21.2,57.278H0Z" transform="translate(331.077)"/><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M5.7,15.3,11.358,0H0Z" transform="translate(325.398 90.649)"/><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M5.7,15.3,11.358,0H0Z" transform="translate(367.924 90.649)"/><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M65.34-63,39.87.45H27.63L2.16-63h15.3L33.93-18.63,50.4-63ZM96.3,0H82.44V-63H96.3Zm76.95,0h-16.2l-13.5-20.16H132.66V0H118.8V-63h28.8q11.16,0,17.46,5.535t6.3,15.255v.18q0,14.49-13.5,19.53ZM157.32-41.31v-.18a8.063,8.063,0,0,0-2.88-6.705q-2.88-2.295-8.01-2.295H132.66V-32.4H146.7q4.95,0,7.785-2.43A8.106,8.106,0,0,0,157.32-41.31ZM252,0H237.51l-5.76-14.13H205.11L199.35,0H185.22l27-63.45H225ZM226.8-26.37,218.43-46.8l-8.37,20.43ZM313.74,0H268.47V-63h13.86v50.4h31.41Z" transform="translate(-2.16 130.975)"/><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M55.26-50.22H36.09V0H22.23V-50.22H3.06V-63h52.2ZM127.08,0h-16.2L97.38-20.16H86.49V0H72.63V-63h28.8q11.16,0,17.46,5.535t6.3,15.255v.18q0,14.49-13.5,19.53ZM111.15-41.31v-.18a8.063,8.063,0,0,0-2.88-6.705q-2.88-2.295-8.01-2.295H86.49V-32.4h14.04q4.95,0,7.785-2.43A8.106,8.106,0,0,0,111.15-41.31ZM158.94,0H145.08V-63h13.86Zm76.05-17.28q0,8.46-6.3,12.87T211.41,0H181.44V-63h29.25q9.63,0,15.21,4.41a14.353,14.353,0,0,1,5.58,11.88v.18q0,8.91-8.28,13.59a20.832,20.832,0,0,1,8.82,5.85q2.97,3.6,2.97,9.63ZM217.71-44.19v-.18a5.544,5.544,0,0,0-2.34-4.815q-2.34-1.665-6.75-1.665H194.94v13.32h12.78Q217.71-37.53,217.71-44.19Zm3.51,25.2v-.18q0-6.84-10.26-6.84H194.94v13.86h16.47Q221.22-12.15,221.22-18.99ZM301.14,0H253.17V-63h47.52v12.33H266.94v12.78h29.7v12.33h-29.7v13.23h34.2Z" transform="translate(322.84 130.975)"/>'
    },
    sats: {
      width: 29,
      height: 29,
      viewBox: [0, 0, 29, 29],
      data: '<g xmlns="http://www.w3.org/2000/svg" transform="translate(.26 .086)"><circle cx="14.5" cy="14.5" r="14.5" fill="#261e1f" transform="translate(-.26 -.086)"/><path fill="#17d4e9" d="M0 0H1.547V2.642H0z" transform="translate(13.846 4.772)"/><path fill="#17d4e9" d="M0 0H1.547V2.642H0z" transform="translate(13.846 21.825)"/><path fill="#17d4e9" d="M0 0H1.547V11.028H0z" transform="rotate(90 5.2 14.935)"/><path fill="#17d4e9" d="M0 0H1.547V11.028H0z" transform="rotate(90 3.157 16.977)"/><path fill="#17d4e9" d="M0 0H1.547V11.028H0z" transform="rotate(90 1.172 18.962)"/></g>'
    },
    crown: {
      width: 15,
      height: 15,
      viewBox: [0, 0, 15, 15],
      data: '<g xmlns="http://www.w3.org/2000/svg" transform="translate(-734 -586)"><circle cx="7.5" cy="7.5" r="7.5" fill="#00b8ce" transform="translate(734 586)"/><path fill="#261e1f" d="M8.75-3.719a.656.656,0,0,0-.656-.656.656.656,0,0,0-.656.656.764.764,0,0,0,.06.271l-.99.593a.516.516,0,0,1-.224.062.483.483,0,0,1-.38-.221L4.789-4.963a.744.744,0,0,0,.242-.509.656.656,0,0,0-.656-.656.656.656,0,0,0-.656.656.744.744,0,0,0,.242.509L2.846-3.013a.483.483,0,0,1-.38.221.516.516,0,0,1-.224-.062l-.988-.593a.787.787,0,0,0,.06-.276.661.661,0,0,0-.661-.661.661.661,0,0,0-.661.661.661.661,0,0,0,.661.661h0a.809.809,0,0,0,.105-.011L1.75-.437H7l.988-2.636a.809.809,0,0,0,.105.011A.656.656,0,0,0,8.75-3.719Z" transform="translate(737 597)"/></g>'
    },
    like: {
      width: 21.031,
      height: 18.375,
      viewBox: [0, 0, 21.031, 18.375],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#574d44" d="M18.785-15.75a6.392,6.392,0,0,1,2.01,3.035,6,6,0,0,1,0,3.261,6.375,6.375,0,0,1-1.559,2.81L12.059.656a2.129,2.129,0,0,1-1.559.656A2.129,2.129,0,0,1,8.941.656l-7.178-7.3A6.375,6.375,0,0,1,.205-9.454a5.75,5.75,0,0,1,.041-3.261A6.119,6.119,0,0,1,2.215-15.75a5.328,5.328,0,0,1,2.666-1.23,6.294,6.294,0,0,1,3.015.246,6.506,6.506,0,0,1,2.6,1.6,6.506,6.506,0,0,1,2.6-1.6,6.294,6.294,0,0,1,3.015-.246A5.328,5.328,0,0,1,18.785-15.75Zm-.943,7.711a4.4,4.4,0,0,0,1.046-1.907,4.009,4.009,0,0,0-.021-2.235,4.052,4.052,0,0,0-1.354-2.051,3.791,3.791,0,0,0-2.81-.861,4.172,4.172,0,0,0-2.769,1.312L10.5-12.346,9.064-13.781A4.172,4.172,0,0,0,6.3-15.094a3.791,3.791,0,0,0-2.81.861,4.052,4.052,0,0,0-1.354,2.051,4.009,4.009,0,0,0-.021,2.235A4.4,4.4,0,0,0,3.158-8.039l7.219,7.3q.123.164.246,0Z" transform="translate(.011 17.062)"/>'
    },
    tick: {
      width: 17,
      height: 12.684,
      viewBox: [0, 0, 17, 12.684],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M5.777-.3a.758.758,0,0,0,.6.266.758.758,0,0,0,.6-.266l9.795-9.762a.809.809,0,0,0,.232-.6.809.809,0,0,0-.232-.6l-1.229-1.2a.74.74,0,0,0-.581-.266.843.843,0,0,0-.614.266L6.375-4.482,2.656-8.2a.843.843,0,0,0-.614-.266.74.74,0,0,0-.581.266L.232-7.006a.809.809,0,0,0-.232.6.809.809,0,0,0,.232.6Z" transform="translate(0 12.717)"/>'
    },
    share: {
      width: 23.625,
      height: 21,
      viewBox: [0, 0, 23.625, 21],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#574d44" d="M17.391-5.537a.926.926,0,0,1-.677.287.926.926,0,0,1-.677-.287.949.949,0,0,1-.287-.7V-9.187a15.778,15.778,0,0,0-4.758.615A3.407,3.407,0,0,0,8.675-6.439a7.355,7.355,0,0,0,.308,4.266.593.593,0,0,1-.246.759.617.617,0,0,1-.779-.021A8.141,8.141,0,0,1,5.824-3.979a7.058,7.058,0,0,1-.9-3.363A5.967,5.967,0,0,1,8.08-13.084q2.5-1.312,7.67-1.354v-2.953a.949.949,0,0,1,.287-.7.926.926,0,0,1,.677-.287.926.926,0,0,1,.677.287L23.3-12.51a.893.893,0,0,1,.328.7.893.893,0,0,1-.328.7ZM15.75-2.83a.51.51,0,0,1,.164-.369.444.444,0,0,1,.41-.123,2.711,2.711,0,0,0,1.395-.123.481.481,0,0,1,.451.062.452.452,0,0,1,.205.39V.656A1.9,1.9,0,0,1,17.8,2.051a1.9,1.9,0,0,1-1.395.574H1.969A1.9,1.9,0,0,1,.574,2.051,1.9,1.9,0,0,1,0,.656V-13.781a1.9,1.9,0,0,1,.574-1.395,1.9,1.9,0,0,1,1.395-.574H6.932a.451.451,0,0,1,.472.369.471.471,0,0,1-.226.574,7.486,7.486,0,0,0-2.092,1.518.51.51,0,0,1-.369.164H2.625V0H15.75Z" transform="translate(0 18.375)"/>'
    },
    more: {
      width: 12.824,
      height: 3.024,
      viewBox: [0, 0, 12.824, 3.024],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#574d44" d="M4.018-5.012a1.476,1.476,0,0,1-.427,1.078A1.457,1.457,0,0,1,2.506-3.5a1.457,1.457,0,0,1-1.085-.434A1.476,1.476,0,0,1,.994-5.012,1.47,1.47,0,0,1,1.421-6.1a1.47,1.47,0,0,1,1.085-.427A1.47,1.47,0,0,1,3.591-6.1,1.47,1.47,0,0,1,4.018-5.012Zm4.9,0a1.476,1.476,0,0,1-.427,1.078A1.457,1.457,0,0,1,7.406-3.5a1.457,1.457,0,0,1-1.085-.434,1.476,1.476,0,0,1-.427-1.078A1.47,1.47,0,0,1,6.321-6.1a1.47,1.47,0,0,1,1.085-.427A1.47,1.47,0,0,1,8.491-6.1,1.47,1.47,0,0,1,8.918-5.012Zm4.9,0a1.476,1.476,0,0,1-.427,1.078,1.457,1.457,0,0,1-1.085.434,1.457,1.457,0,0,1-1.085-.434,1.476,1.476,0,0,1-.427-1.078A1.47,1.47,0,0,1,11.221-6.1a1.47,1.47,0,0,1,1.085-.427,1.47,1.47,0,0,1,1.085.427A1.47,1.47,0,0,1,13.818-5.012Z" transform="translate(-.994 6.524)"/>'
    },
    filter: {
      width: 27.109,
      height: 23.721,
      viewBox: [0, 0, 27.109, 23.721],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M26.262,4.013a.816.816,0,0,1,.847.847V6.554a.816.816,0,0,1-.847.847H8.472v.847a.816.816,0,0,1-.847.847H5.93a.816.816,0,0,1-.847-.847V7.4H.847A.816.816,0,0,1,0,6.554V4.86a.816.816,0,0,1,.847-.847H5.083V3.166a.816.816,0,0,1,.847-.847H7.625a.816.816,0,0,1,.847.847v.847Zm0-8.472a.825.825,0,0,1,.609.238.825.825,0,0,1,.238.609v1.694a.825.825,0,0,1-.238.609.825.825,0,0,1-.609.238H22.026v.847a.825.825,0,0,1-.238.609.825.825,0,0,1-.609.238H19.485a.825.825,0,0,1-.609-.238.825.825,0,0,1-.238-.609V-1.07H.847a.825.825,0,0,1-.609-.238A.825.825,0,0,1,0-1.917V-3.612a.825.825,0,0,1,.238-.609.825.825,0,0,1,.609-.238H18.638v-.847a.825.825,0,0,1,.238-.609.825.825,0,0,1,.609-.238h1.694a.825.825,0,0,1,.609.238.825.825,0,0,1,.238.609v.847Zm0-8.472a.825.825,0,0,1,.609.238.825.825,0,0,1,.238.609v1.694a.825.825,0,0,1-.238.609.825.825,0,0,1-.609.238H15.249v.847a.825.825,0,0,1-.238.609.825.825,0,0,1-.609.238H12.708a.825.825,0,0,1-.609-.238.825.825,0,0,1-.238-.609v-.847H.847A.825.825,0,0,1,.238-9.78.825.825,0,0,1,0-10.389v-1.694a.825.825,0,0,1,.238-.609.825.825,0,0,1,.609-.238H11.86v-.847a.825.825,0,0,1,.238-.609.825.825,0,0,1,.609-.238H14.4a.825.825,0,0,1,.609.238.825.825,0,0,1,.238.609v.847Z" transform="translate(0 14.625)"/>'
    },
    close: {
      width: 19,
      height: 27,
      viewBox: [0, 0, 1280, 1280],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#574D44" d="M1545 12784 c-85 -19 -167 -51 -243 -95 -69 -41 -1089 -1049 -1157 -1144 -101 -141 -140 -263 -140 -440 0 -169 36 -293 125 -427 29 -43 705 -726 2149 -2170 l2106 -2108 -2111 -2112 c-1356 -1358 -2124 -2133 -2147 -2169 -88 -137 -121 -249 -121 -419 -1 -181 37 -302 139 -445 68 -95 1088 -1103 1157 -1144 273 -159 604 -143 853 42 22 17 986 976 2143 2131 l2102 2101 2103 -2101 c1156 -1155 2120 -2114 2142 -2131 69 -51 130 -82 224 -113 208 -70 431 -44 629 71 69 41 1089 1049 1157 1144 101 141 140 263 140 440 0 166 -36 290 -121 422 -25 39 -746 767 -2148 2171 l-2111 2112 2107 2108 c2207 2208 2162 2161 2219 2303 75 187 77 392 4 572 -53 132 -74 157 -615 700 -289 291 -552 548 -585 572 -141 101 -263 140 -440 140 -166 0 -289 -35 -420 -120 -41 -26 -724 -702 -2172 -2149 l-2113 -2111 -2112 2111 c-1454 1452 -2132 2123 -2173 2150 -64 41 -149 78 -230 101 -79 22 -258 26 -340 7z" transform="matrix(.1 0 0 -.1 0 1280)"/>'
    },
    'arrow-down': {
      width: 18.734,
      height: 11.41,
      viewBox: [0, 0, 18.734, 11.41],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#574d44" d="M8.895-2.879a.936.936,0,0,0,.73.344.936.936,0,0,0,.73-.344l8.336-8.336a.994.994,0,0,0,.3-.73.994.994,0,0,0-.3-.73l-.945-.945a1.075,1.075,0,0,0-.73-.322.925.925,0,0,0-.73.279L9.625-7l-6.66-6.66a.925.925,0,0,0-.73-.279,1.075,1.075,0,0,0-.73.322l-.945.945a.994.994,0,0,0-.3.73.994.994,0,0,0,.3.73Z" transform="translate(-.258 13.945)"/>'
    },
    'arrow-right': {
      width: 19.536,
      height: 32.077,
      viewBox: [0, 0, 19.536, 32.077],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#574d44" d="M15.046,5a1.623,1.623,0,0,0,2.5,0L31.82-9.271a1.7,1.7,0,0,0,.515-1.251,1.7,1.7,0,0,0-.515-1.251L30.2-13.391a1.84,1.84,0,0,0-1.251-.552,1.583,1.583,0,0,0-1.251.478L16.3-2.061l-11.4-11.4a1.583,1.583,0,0,0-1.251-.478,1.84,1.84,0,0,0-1.251.552L.773-11.772a1.7,1.7,0,0,0-.515,1.251A1.7,1.7,0,0,0,.773-9.271Z" transform="rotate(-90 23.14 9.195)"/>'
    },
    calendar: {
      width: 12.25,
      height: 14,
      viewBox: [0, 0, 12.25, 14],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#00b8ce" d="M10.937-10.5a1.266,1.266,0,0,1,.93.383,1.266,1.266,0,0,1,.383.93V.437a1.266,1.266,0,0,1-.383.93,1.266,1.266,0,0,1-.93.383H1.312a1.266,1.266,0,0,1-.93-.383A1.266,1.266,0,0,1,0,.437V-9.187a1.266,1.266,0,0,1,.383-.93,1.266,1.266,0,0,1,.93-.383H2.625v-1.422a.316.316,0,0,1,.1-.232.316.316,0,0,1,.232-.1H4.047a.316.316,0,0,1,.232.1.316.316,0,0,1,.1.232V-10.5h3.5v-1.422a.316.316,0,0,1,.1-.232.316.316,0,0,1,.232-.1H9.3a.316.316,0,0,1,.232.1.316.316,0,0,1,.1.232V-10.5ZM10.773.437a.158.158,0,0,0,.109-.055.158.158,0,0,0,.055-.109V-7.875H1.312V.273a.158.158,0,0,0,.055.109.158.158,0,0,0,.109.055Z" transform="translate(0 12.25)"/>'
    },
    clock: {
      width: 13.562,
      height: 13.563,
      viewBox: [0, 0, 13.562, 13.563],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#00b8ce" d="M7-12.031a6.573,6.573,0,0,1,3.391.916,6.852,6.852,0,0,1,2.475,2.475,6.573,6.573,0,0,1,.916,3.391,6.573,6.573,0,0,1-.916,3.391A6.852,6.852,0,0,1,10.391.615,6.573,6.573,0,0,1,7,1.531,6.573,6.573,0,0,1,3.609.615,6.852,6.852,0,0,1,1.135-1.859,6.573,6.573,0,0,1,.219-5.25a6.573,6.573,0,0,1,.916-3.391,6.852,6.852,0,0,1,2.475-2.475A6.573,6.573,0,0,1,7-12.031ZM7,.219A5.307,5.307,0,0,0,9.734-.52a5.515,5.515,0,0,0,2-2,5.307,5.307,0,0,0,.738-2.734,5.307,5.307,0,0,0-.738-2.734,5.515,5.515,0,0,0-2-2A5.307,5.307,0,0,0,7-10.719a5.307,5.307,0,0,0-2.734.738,5.515,5.515,0,0,0-2,2A5.307,5.307,0,0,0,1.531-5.25,5.307,5.307,0,0,0,2.27-2.516a5.515,5.515,0,0,0,2,2A5.307,5.307,0,0,0,7,.219ZM6.371-4.32a.337.337,0,0,1-.137-.273V-9.078a.316.316,0,0,1,.1-.232.316.316,0,0,1,.232-.1h.875a.316.316,0,0,1,.232.1.316.316,0,0,1,.1.232V-5.2L9.6-3.883a.3.3,0,0,1,.123.219.34.34,0,0,1-.068.246l-.492.711a.35.35,0,0,1-.219.137A.3.3,0,0,1,8.7-2.625Z" transform="translate(-.219 12.031)"/>'
    },
    explicit: {
      width: 14,
      height: 14,
      viewBox: [0, 0, 14, 14],
      data: '<g xmlns="http://www.w3.org/2000/svg" transform="translate(-643 -504)"><circle cx="7" cy="7" r="7" fill="#00b8ce" transform="translate(643 504)"/><path fill="#fff" d="M.828-8.568v6.185h4.7V-3.526H2.188V-5.042h3V-6.1h-3V-7.425H5.454V-8.568Z" transform="translate(646.981 516.245)"/></g>'
    },
    pause: {
      width: 42,
      height: 42,
      viewBox: [0, 0, 42, 42],
      data: '<g xmlns="http://www.w3.org/2000/svg" transform="translate(-690 -497.666)"><circle cx="21" cy="21" r="21" fill="#00b8ce" transform="translate(690 497.666)"/><path fill="#fff" d="M1.312.848A1.266,1.266,0,0,1,.383.465,1.266,1.266,0,0,1,0-.465V-10.09a1.266,1.266,0,0,1,.383-.93,1.266,1.266,0,0,1,.93-.383H3.937a1.266,1.266,0,0,1,.93.383,1.266,1.266,0,0,1,.383.93V-.465a1.266,1.266,0,0,1-.383.93,1.266,1.266,0,0,1-.93.383ZM12.25-.465a1.266,1.266,0,0,1-.383.93,1.266,1.266,0,0,1-.93.383H8.312a1.266,1.266,0,0,1-.93-.383A1.266,1.266,0,0,1,7-.465V-10.09a1.266,1.266,0,0,1,.383-.93,1.266,1.266,0,0,1,.93-.383h2.625a1.266,1.266,0,0,1,.93.383,1.266,1.266,0,0,1,.383.93Z" transform="translate(705 523.666)"/></g>'
    },
    'play-arrow': {
      width: 12.257,
      height: 13.994,
      viewBox: [0, 0, 12.257, 13.994],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M11.594-6.371a1.229,1.229,0,0,1,.588.684,1.31,1.31,0,0,1,0,.875,1.229,1.229,0,0,1-.588.684L1.969,1.559a1.233,1.233,0,0,1-.875.164,1.319,1.319,0,0,1-.779-.437A1.236,1.236,0,0,1,0,.437V-10.937a1.23,1.23,0,0,1,.328-.889,1.342,1.342,0,0,1,.793-.41,1.2,1.2,0,0,1,.848.178Z" transform="translate(0 12.251)"/>'
    },
    'earn-icon': {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<g xmlns="http://www.w3.org/2000/svg" transform="translate(-.469 -.134)"><circle cx="25" cy="25" r="25" fill="#00b8ce" transform="translate(.469 .134)"/><path fill="#fff" d="M0 0H2.669V4.559H0z" transform="translate(24.338 8.383)"/><path fill="#fff" d="M0 0H2.669V4.559H0z" transform="translate(24.338 37.807)"/><path fill="#fff" d="M0 0H2.669V19.027H0z" transform="rotate(90 9.12 26.066)"/><path fill="#fff" d="M0 0H2.669V19.027H0z" transform="rotate(90 5.596 29.59)"/><path fill="#fff" d="M0 0H2.669V19.027H0z" transform="rotate(90 2.171 33.015)"/></g>'
    },
    'love-icon': {
      width: 49,
      height: 49,
      viewBox: [0, 0, 49, 49],
      data: '<g xmlns="http://www.w3.org/2000/svg" transform="translate(.46 .262)"><circle cx="24.5" cy="24.5" r="24.5" fill="#00b8ce" transform="translate(-.46 -.262)"/><path fill="#fff" d="M20.574-17.25a7,7,0,0,1,2.2,3.324,6.576,6.576,0,0,1,0,3.571,6.982,6.982,0,0,1-1.707,3.077l-7.861,8a2.332,2.332,0,0,1-1.707.719A2.332,2.332,0,0,1,9.793.719l-7.861-8A6.982,6.982,0,0,1,.225-10.354,6.3,6.3,0,0,1,.27-13.926,6.7,6.7,0,0,1,2.426-17.25,5.836,5.836,0,0,1,5.346-18.6a6.894,6.894,0,0,1,3.3.27A7.125,7.125,0,0,1,11.5-16.576a7.125,7.125,0,0,1,2.853-1.752,6.894,6.894,0,0,1,3.3-.27A5.836,5.836,0,0,1,20.574-17.25ZM19.541-8.8a4.824,4.824,0,0,0,1.146-2.089,4.39,4.39,0,0,0-.022-2.448,4.437,4.437,0,0,0-1.482-2.246,4.152,4.152,0,0,0-3.077-.943,4.57,4.57,0,0,0-3.032,1.437L11.5-13.521,9.928-15.094A4.57,4.57,0,0,0,6.9-16.531a4.152,4.152,0,0,0-3.077.943,4.437,4.437,0,0,0-1.482,2.246,4.39,4.39,0,0,0-.022,2.448A4.824,4.824,0,0,0,3.459-8.8l7.906,8q.135.18.27,0Z" transform="translate(12.54 33.738)"/></g>'
    },
    quote: {
      width: 106.813,
      height: 78.664,
      viewBox: [0, 0, 106.813, 78.664],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#00b8ce" d="M50.668-98.686l-16.2,54.178L28.11-68.8q11.375,0,18.413,6.362T53.56-44.7q0,11.183-7.23,17.931T28.11-20.022q-10.99,0-18.22-6.748T2.66-44.7a39.908,39.908,0,0,1,.482-6.17A40.515,40.515,0,0,1,5.263-58.39Q6.9-62.825,10.179-69.958l13.5-28.728Zm55.913,0-16.2,54.178L84.023-68.8q11.375,0,18.413,6.362T109.473-44.7q0,11.183-7.23,17.931t-18.22,6.748q-10.99,0-18.22-6.748T58.573-44.7a39.907,39.907,0,0,1,.482-6.17,40.515,40.515,0,0,1,2.121-7.519q1.639-4.434,4.916-11.568l13.5-28.728Z" opacity=".25" transform="translate(-2.66 98.686)"/>'
    }
  },
  ids: [
    'search',
    'menu',
    'comment',
    'facebook',
    'instagram',
    'play',
    'twitter',
    'footer-repeat',
    'logo-black',
    'logo-white',
    'sats',
    'crown',
    'like',
    'tick',
    'share',
    'more',
    'filter',
    'close',
    'arrow-down',
    'calendar',
    'clock',
    'explicit',
    'pause',
    'play-arrow',
    'arrow-right',
    'earn-icon',
    'love-icon',
    'quote'
  ] as const
};

export type Icons = typeof files.ids[number];

interface SVGProps {
  id: Icons;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const SVG: FC<SVGProps> = props => {
  const file = files.byId[props.id];
  if (!file) return null;

  const width = props.width || file.width;
  const height = props.height || file.height;
  const viewBox = file.viewBox ? file.viewBox.join(' ') : '0 0 ' + props.width + ' ' + props.height;
  const color = props.color || 'var(--color-secondary-dark)';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      preserveAspectRatio="xMinYMin"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      className={props.className || ''}
    >
      <use xlinkHref={'#' + prefix + '-' + props.id} />
    </svg>
  );
};

const SVGSource: FC = () => {
  return (
    <svg display="none">
      <defs>
        {files.ids.reduce((defs, fileId, fileIndex) => {
          const file = files.byId[fileId];
          return defs.concat(
            <g
              key={fileIndex}
              id={prefix + '-' + fileId}
              dangerouslySetInnerHTML={{ __html: file.data }}
            />
          );
        }, [] as unknown[])}
      </defs>
    </svg>
  );
};

export { SVG, SVGSource };
