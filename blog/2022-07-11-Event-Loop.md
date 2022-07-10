---
slug: event-loop
title: Something you should know about Event Loop
authors: apriil15
tags: [Node.js]
---

Something you should know about Event Loop!

<!--truncate-->

## Concept

- all JavaScript, V8, and the event loop run in one thread, called the main thread
- Node.js has two types of threads: `one event loop` and `worker threads`
- Libuv creates a pool with 4 threads (default) that is only used if no asynchronous API is available
- event loop is a set of phases with dedicated data structures for each phase

## Micro-Task

- nextTick, promise are not part of Libuv, and are represented as an event loop on their own
- micro-task (nextTick, promise) uses the concept of a job queue
- micro-tasks’ callback will be executed immediately after the current phase of the event loop

![micro-task (order: nextTick → promise)](https://i.imgur.com/yisxkzu.png)

## Libuv’s Event Loop Phase

- data structure: timer (minHeap), immediate (queue)

![Libuv’s event loop phase](https://i.imgur.com/pOKWTp9.png)

## Examples

In this case, setTimeout and setImmediate will be random order

```tsx
console.log('start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

setImmediate(() => {
  console.log('setImmediate')
})

console.log('end')

// start
// end
// setImmediate (random order)
// setTimeout (random order)
```

In this case, because after the IO phase, the next phase is `setImmediate`. So, setImmediate must before setTimeout

```tsx
import { readFile } from 'fs'

console.log('start')

readFile('src/test.txt', (err, data) => {
  setTimeout(() => {
    console.log('setTimeout')
  }, 0)

  setImmediate(() => {
    console.log('setImmediate')
  })

  if (!err) {
    console.log(data.toString())
  }
})

console.log('end')

// start
// end
// data
// setImmediate
// setTimeout
```

## Libuv

- Libuv will delegate the work to the `operating system kernel` whenever possible

  The only performance limitation is the network

  - TCP/UDP servers and clients (network request)
  - Pipes
  - dns.resolve - Child processes

- use libuv’s thread pool
  - fs module (async function)
  - dns.lookup
  - Pipes (edge cases)

### Thread Pool

- os concept: os has `scheduler` whose job is to allow certain processes to run on this 4-core system

![](https://i.imgur.com/rlsAITS.png)

Libuv’s thread pools (default = 4)

1. tasks enqueue
2. worker handles
3. os scheduler handles
4. core do something (parallel)

![](https://i.imgur.com/98MoYCc.png)
![](https://i.imgur.com/axqFwXY.png)

## Reference

- I recommend reading this series of articles

  - [Node.js Internals: Not everything happens on the thread pool](https://medium.com/softup-technologies/node-js-internals-not-everything-happens-on-the-thread-pool-a14d0a286efb)

- [Morning Keynote- Everything You Need to Know About Node.js Event Loop - Bert Belder, IBM](https://www.youtube.com/watch?v=PNa9OMajw9w&list=WL&index=17&ab_channel=node.js)

- [Don't Block the Event Loop (or the Worker Pool) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
