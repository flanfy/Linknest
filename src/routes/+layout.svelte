<script lang="ts">
  import { user, userData } from "$lib/firebase";
  import "../app.css";
  import Dropdown from "$lib/components/Dropdown.svelte";
    $user;
    $userData; 
 </script>
 
 <div class="min-h-screen flex flex-col">
    <div class="flex justify-between items-center px-4 py-2">
      <a href="/" class="text-xl font-bold ">Linknest</a>
        {#if $userData?.username}
          <Dropdown />
        {/if}
    </div>
    <slot />
  </div>