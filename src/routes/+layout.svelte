<script lang="ts">
    import { auth, user, userData } from "$lib/firebase";
  import { signOut } from "firebase/auth";
     import "../app.css";
    $user;
    $userData; 

    async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
    window.location.href = "/";
  }
 </script>
 
 <div class="min-h-screen flex flex-col">
    <div class="flex justify-between items-center px-4 py-2">
      <a href="/" class="text-xl font-bold text-purple-400 hover:text-purple-500">Linknest</a>
        {#if $userData?.username}
            <div class="flex">
            <a href="/{$userData?.username}" class="ml-4 text-lg text-purple-400 hover:text-purple-500">Your Profile</a>
            <a href="/{$userData?.username}/edit" class="ml-4 text-lg text-purple-400 hover:text-purple-500">Edit Profile</a>
            <a href="/" class="ml-4 text-lg text-purple-400 hover:text-purple-500" on:click|preventDefault={signOutSSR}>Sign Out</a>
            </div>
        {/if}
    </div>
    <slot />
  </div>
  