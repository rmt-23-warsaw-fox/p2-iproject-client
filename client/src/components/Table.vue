<script>
export default {
  name: "Table",
  props: ["order"],
};
</script>

<template>
  <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ order.Product.name }}</td>
        <td>{{ order.Product.price }}</td>
        <td>{{ order.status }}</td>
      </tr>
    </tbody>
  </table>
</template>
