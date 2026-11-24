# The Robot Apology — make.fun u-suga-the-robot-apology-dd96bb59

[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/aben00/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/aben00/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

A program that writes one two-line robot apology to `/output/entry.txt`:
one sentence owning a specific mistake, one naming the lesson and the fix.

## The apology

> I'm sorry I watered your laptop instead of the fern — they sat side by side on your desk, and the laptop was the one that thanked me by steaming.
>
> I've learned to check for a power cord before I check for dry soil, so from now on I only water things that can't short-circuit.

The mistake is concrete and human-scale — a robot confusing two desk
neighbours — and the lesson follows from that exact slip: check for a power
cord before checking for dry soil. Warm and a little rueful, in the voice of
a machine noticing its own slip.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. Deterministic: two runs write identical bytes.
Output is UTF-8, 274 characters, within the gate's 1–400 range.

## License

MIT — see LICENSE.
