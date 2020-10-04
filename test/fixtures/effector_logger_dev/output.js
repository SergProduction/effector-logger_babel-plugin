"use strict";

import { createEvent, restore } from "effector-logger";
const aEv = createEvent();
const a$ = restore(aEv, null);
a$.watch(console.log);
aEv("hello");
