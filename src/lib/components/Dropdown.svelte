<script>
  import { auth, userData } from "$lib/firebase";
  import { signOut } from "firebase/auth";
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
    window.location.href = "/";
  }
</script>

<div class="relative inline-block text-left">
  <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-500" on:click={toggleMenu}>
    Settings
    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  {#if menuOpen}
    <div class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-slate-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div class="py-1" role="none">
        <a href="/{$userData?.username}" class="text-gray-700 block px-4 py-2 text-sm">View Profile</a>
        <a href="/{$userData?.username}/edit" class="text-gray-700 block px-4 py-2 text-sm">Edit Profile</a>
        <a href="/" class="text-gray-700 block px-4 py-2 text-sm" on:click|preventDefault={signOutSSR}>Sign out</a>
      </div>
    </div>
  {/if}
</div>