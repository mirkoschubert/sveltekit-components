<script lang="ts">
  import { SearchIcon } from 'svelte-feather-icons'
</script>

<div
  class="search"
  role="search"
>
  <label for="search">Search</label>
  <input type="text" name="search" class="search-field" placeholder="Search" />
  <button type="button" class="search-icon">
    <SearchIcon size="16" />
  </button>
</div>