<script>
export default {
  props: ["specification"],
};
</script>

<template>
  <div class="row mb-4 row-cols-1 row-cols-lg-2 g-3 bg-light">
    <div class="col-sm-12 col-lg-2">
      <h4 class="">{{ specification.title }}</h4>
    </div>

    <div class="col-sm-12 col-lg-10">
      <table class="table">
        <tbody>
          <tr v-for="(spec, iSpec) in specification.specs" v-bind:key="iSpec">
            <th scope="row" style="width: 25%">{{ spec.key }}</th>
            <td>{{ spec.val[0] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
