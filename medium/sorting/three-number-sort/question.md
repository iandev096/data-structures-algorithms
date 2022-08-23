<div class="TLQjVhfBX4gHWkO9qYsJ ae-workspace-dark"><div class="html">
<p>
  You're given an array of integers and another array of three distinct
  integers. The first array is guaranteed to only contain integers that are in
  the second array, and the second array represents a desired order for the
  integers in the first array. For example, a second array of
  <span>[x, y, z]</span> represents a desired order of
  <span>[x, x, ..., x, y, y, ..., y, z, z, ..., z]</span> in the first array.
</p>
<p>
  Write a function that sorts the first array according to the desired order in
  the second array.
</p>
<p>
  The function should perform this in place (i.e., it should mutate the input
  array), and it shouldn't use any auxiliary space (i.e., it should run with
  constant space: <span>O(1)</span> space).
</p>
<p>
  Note that the desired order won't necessarily be ascending or descending and
  that the first array won't necessarily contain all three integers found in the
  second array—it might only contain one or two.
</p>
<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">array</span> = [1, 0, 0, -1, -1, 0, 1, 1]
<span class="CodeEditor-promptParameter">order</span> = [0, 1, -1]
</pre>
<h3>Sample Output</h3>
<pre>[0, 0, 0, 1, 1, 1, -1, -1]
</pre>
</div></div>