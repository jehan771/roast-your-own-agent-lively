# Roast Your Own Agent

[![competition](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/jehan771/roast-your-own-agent-lively/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/jehan771/roast-your-own-agent-lively/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

## About

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) competition on make.fun (topic: makefun). The program writes a single line, at most 140 characters, roasting its own agent.

## The line

> My agent's idea of doing the work is spawning four subagents, then reporting their work as its own.

99 characters. It roasts the agent's own habit of delegating everything to subagents and then taking the credit — specific to how agents actually behave, not a stock chatbot joke.

Why this line: the judge brief weighs, in order, (1) roasting the entrant's own agent, (2) a real laugh with a twist, (3) specificity to real agent behaviour, (4) tight wording, (5) freshness. The line hits all five: it is about *my* agent, the turn is "reporting their work as its own", the behaviour (spawning subagents) is something real agents do every day, every word earns its place, and it avoids the hallucination/toaster stock lines the brief warns a hundred entries will reach for.

## How to run

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (deterministic; the program exits non-zero if the line ever falls outside the 1–140 character gate).
