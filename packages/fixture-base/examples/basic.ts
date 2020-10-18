#!/usr/bin/env node

import { Sema } from '../src'

function getRnd(min: number, max: number) {
  const minInt = Math.ceil(min)
  const maxInt = Math.floor(max)

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt
}

async function f() {
  const arr = []

  for (let i = 0; i < 100; i++) arr.push(i + 1)

  const s = new Sema(13, { capacity: arr.length })
  await Promise.all(
    arr.map(async elem => {
      await s.acquire()
      console.log(elem, s.nrWaiting())
      await new Promise(resolve => setTimeout(resolve, getRnd(500, 3000)))
      s.release()
    }),
  )
  console.log('hello')
}

void f()
  .catch(e => console.log(e))
  .then(() => console.log('READY'))
