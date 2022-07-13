<script>
  let count = 0

  function inc() {
    count += 1
  }

</script>
<div class="p-16">
  <div class="stats bg-primary text-primary-content">
    
    <div class="stat">
      <div class="stat-title">Counter</div>
      <div class="stat-value">{count}</div>
      <div class="stat-desc">Total times button clicked</div>
      <button class="mt-4 btn btn-sm" on:click={inc}>Inc</button>
    </div>
  </div>
</div>