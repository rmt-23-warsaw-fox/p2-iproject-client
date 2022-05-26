<script>
export default {
  name: "CommentComponent",
  props: ["comment"],
};
</script>
<template>
  <div class="w-[100%] flex bg-white border-b-2">
    <div class="border-r-2 flex justify-center items-center p-3">
      <img
        src="../assets/guitar.jpg"
        alt="Profile Picture"
        class="rounded-full"
      />
    </div>
    <div class="flex p-4 flex-col">
      <p class="font-semibold">{{comment.User_Info.displayName}}</p>
      <p>{{ comment.message }}</p>
    </div>
  </div>
</template>

<style>
img {
  width: 60px;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
