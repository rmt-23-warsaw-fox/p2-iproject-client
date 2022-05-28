<script>
export default {
  name: "CommentComponent",
  props: ["comment"],
  methods: {
    imageSource(data) {
      var binary = "";
      var bytes = new Uint8Array(data.imageData.data);
      // console.log(bytes);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return `data:${
        data.imageType
      };base64,${btoa(binary)}`;
    },
  },
};
</script>
<template>
  <div class="w-[100%] flex bg-white border-b-2">
    <div class="border-r-2 flex justify-center items-center p-3">
      <img
        :src="imageSource(comment.User_Info.Profile_Picture)"
        alt="Profile Picture"
        class="rounded-full"
      />
    </div>
    <div class="flex p-4 flex-col">
      <p class="font-semibold">{{ comment.User_Info.displayName }}</p>
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
