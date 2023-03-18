// Write your solution here!


       const cats=["Milo","Otis","Garfield"]

       function destructivelyAppendCat(name) {
           cats.push(name)
       }

       function destructivelyPrependCat(name) {
           cats.unshift(name)
       }

       function destructivelyRemoveLastCat() {
           cats.pop()
       }

       function destructivelyRemoveFirstCat() {
           cats.shift()
       }

       function appendCat(name) {
           const newcat=[...cats,name]
           return newcat
       }

       function prependCat(name) {
           const cats=[name,...cats]
           return cats
       }

       function removeLastCat() {
           const cats3=cats.slice(0,-1)
           return cats3
       }

       function removeFirstCat() {
           const cats4=cats.slice(1)
           return cats4
       }
