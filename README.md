# AudioWorklet GarbageCollector Test 

Test to see if GC collections might influence breakups in simple sine generator AudioWorklet. Uses randomized lengths for Float32Arrays + reading of object properties to try to make sure nothing gets JIT'ed out.  Increasing memory allocation sizes seems to correlate with more glitching. 

Test using https://kunstmusik.github.io/audioworklet-gc 

