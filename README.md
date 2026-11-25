# news-image-20261125 — The World in One Day

A one-page newspaper front page summing up the world's news of
**Wednesday 25 November 2026**, as a single 1024x1024 PNG.

## What the image shows

- **Masthead** — "The World in One Day", Wednesday 25 November 2026.
- **Market tape** — verified Wednesday closes: Dow 50,182.95 (+0.33%),
  S&P 500 7,182.78 (−0.25%), Nasdaq 23,585.80 (−0.62%), Russell 2,704.06
  (+0.71%), KOSPI 4,697.51 (−6.16%), Nikkei 57,011.62 (−2.78%),
  WTI $84.08 (+2.47%), gold $3,609.20 (+0.50%).
- **Three lead panels** — two oil tankers hit mines and catch fire in the
  Strait of Hormuz; Wall Street erases a 1,100-point plunge to close up;
  the Houthis claim a strike on Saudi Arabia's Ras Tanura refinery.
- **Twelve feature panels** — Gaza, Ukraine, Sudan, Solomon Islands,
  US inflation/GDP, the Asian market rout, Nvidia, Dell, tariffs, Huawei,
  Pakistan's first astronaut, and the Pope on COP31.
- **Sport** — Champions League results (Liverpool 3–0, Barcelona 4–1,
  PSG 2–2 Roma, Man Utd 2–2 Sporting), Tatum's 41 for the Celtics,
  Sinner's knee surgery, college upsets, Rams at Packers.
- **Also in the news** — nine more stories, from the Vance oil-deal probe
  to the CIA/ODNI breach and the Thanksgiving turkey pardons.
- **World map** — where the day's stories happened, plus ten in-brief items.
- **Date check box** — every story happened, or was first reported, on
  Wednesday 25 November 2026; it names the Tuesday events first reported
  Wednesday and the items deliberately left out.

40 verified stories in total, all from Wednesday 25 November 2026.

## How it was built

`page.html` is the hand-written front page (HTML + CSS + inline SVG art).
It was rendered once to `entry.png` with a headless Chromium screenshot
at exactly 1024x1024. All body text is at least 15px on the canvas.

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory. No network, no randomness — every run writes
identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
