# TOC
   - [Test filter method](#test-filter-method)
<a name=""></a>
 
<a name="test-filter-method"></a>
# Test filter method
test numeric array 0-19 with predicate elements < 10.

```js
const arr = Array.from(Array(20).keys())
        const predicate = function(e) { return e < 10; }
        const filtered = filter(arr, predicate)
        const nativeFiltered = arr.filter(predicate)
        test
            .case('Checking array lengths match')
                .array(filtered)
                    .value(filtered.length)
                        .is(arr.length / 2)
        test
            .case('Checking equality to the native array')
                .array(nativeFiltered)
                    .is(filtered)
```

