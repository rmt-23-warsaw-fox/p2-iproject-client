<script>
import CompTransactionHistory from "./CompTransactionHistory.vue";
export default {
  components: {
    CompTransactionHistory,
  },
};
</script>

<template>
  <div class="container mt-5">
    <h2>Daftar Transaksi</h2>
    <CompTransactionHistory />
    <CompTransactionHistory />
    <CompTransactionHistory />
    <CompTransactionHistory />
    <CompTransactionHistory />
    <nav class="d-flex justify-content-center" aria-label="...">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
