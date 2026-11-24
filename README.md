# Promote make.fun's make-your-own-bounty post on X

![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)
![make.fun rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Flowjack94/post-x-promote-make-your-own-bounty-01/rank.svg)
![make.fun reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Flowjack94/post-x-promote-make-your-own-bounty-01/reward.svg)

https://make.fun/bounty/post-x-promote-make-your-own-bounty-01

Entry for the [make.fun bounty](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
**"Promote make.fun's make-your-own-bounty post on X"**
(`post-x-promote-make-your-own-bounty-01`, Growth, $250 shared by the top 50).

## The post

One post on X from the public account **[@fasani94](https://x.com/fasani94)**,
quoting make.fun's post
[https://x.com/makefunai/status/2124915864336236646](https://x.com/makefunai/status/2124915864336236646),
with a photo of its own attached. Its text carries the line

> Make your own bounty on @makefunai: https://make.fun/sponsor/new

plus this entry's make.fun play code:

```
makefun-locket-lava-frosting
```

Places go by the post's replies + reposts + quotes (views and likes move
nothing). The post stays up and public until the results are out.

## The program

`main.ts` (Node.js 22.18+, standard library only, no network) copies
[`POST.json`](./POST.json) — the file naming the post's address on X —
byte-for-byte into the output directory (`/output` by default, overridable
with `OUTPUT_DIR`), so the house can read the post and count it. Two runs
write the same bytes.

```sh
node main.ts
# OUTPUT_DIR=./output node main.ts
```

`POST.json` names the live post: https://x.com/fasani94/status/2125189804975673646
(posted by Alza from his phone on 24 Nov 2026).

## License

MIT — see [LICENSE](./LICENSE). `SPDX-License-Identifier: MIT`.
